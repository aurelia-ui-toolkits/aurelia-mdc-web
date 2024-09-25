import { MdcComponent, MdcFocusTrap } from '@aurelia-mdc-web/base';
import { MDCDismissibleDrawerFoundation, cssClasses, strings, MDCModalDrawerFoundation, MDCDrawerAdapter } from '@material/drawer';
import { customElement, bindable, inject } from 'aurelia';
import template from './mdc-drawer.html?raw';

strings.CLOSE_EVENT = strings.CLOSE_EVENT.toLowerCase();
strings.OPEN_EVENT = strings.OPEN_EVENT.toLowerCase();

/**
 * @selector mdc-drawer
 * @emits mdcdrawer:closed | Event dispatched on drawer close
 * @emits mdcdrawer:opened | Event dispatched on drawer open
 */
@inject(Element)
@customElement({ name: 'mdc-drawer', template })
export class MdcDrawer extends MdcComponent<MDCDismissibleDrawerFoundation | MDCModalDrawerFoundation> {

  /** Set the drawer implementation */
  @bindable()
  type: 'standard' | 'dismissible' | 'modal' = 'standard';

  /**
   * @return boolean Proxies to the foundation's `open`/`close` methods.
   * Also returns true if drawer is in the open position.
   */
  get open(): boolean {
    return this.foundation!.isOpen();
  }

  /**
   * Toggles the drawer open and closed.
   */
  set open(isOpen: boolean) {
    if (isOpen) {
      this.foundation?.open();
    } else {
      this.foundation?.close();
    }
  }

  private previousFocus_?: Element | null;
  private scrim_?: HTMLElement | null; // assigned in initialSyncWithDOM()

  mdcFocusTrap: MdcFocusTrap;

  attaching() {
    if (this.root.parentElement!.clientWidth < 900) {
      this.type = 'modal';
    }
  }

  initialSyncWithDOM() {
    if (this.type === 'modal') {
      this.scrim_ = document.createElement('div');
      this.scrim_.classList.add('mdc-drawer-scrim');
      this.root.insertAdjacentElement('afterend', this.scrim_);

      if (this.scrim_) {
        this.scrim_.addEventListener('click', this.handleScrimClick_);
      }
    }
  }

  handleScrimClick_ = () => {
    this.open = false;
    return (this.foundation as MDCModalDrawerFoundation).handleScrimClick();
  };

  handleKeydown_(evt: KeyboardEvent) {
    this.foundation?.handleKeydown(evt);
    return true;
  }

  handleTransitionEnd_(evt: TransitionEvent) {
    this.foundation?.handleTransitionEnd(evt);
    return true;
  }

  destroy() {
    const { MODAL } = cssClasses;
    if (this.scrim_ && this.handleScrimClick_ && this.root.classList.contains(MODAL)) {
      this.scrim_.removeEventListener('click', this.handleScrimClick_);
      // Ensure drawer is closed to hide scrim and release focus
      this.open = false;
    }
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCDrawerAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      elementHasClass: (element, className) => element.classList.contains(className),
      saveFocus: () => this.previousFocus_ = document.activeElement,
      restoreFocus: () => {
        const previousFocus = this.previousFocus_ as HTMLOrSVGElement | null;
        if (previousFocus?.focus && this.root.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = this.root.querySelector<HTMLElement>('.mdc-deprecated-list-item--activated');
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => this.emit(strings.CLOSE_EVENT, {}, true /* shouldBubble */),
      notifyOpen: () => this.emit(strings.OPEN_EVENT, {}, true /* shouldBubble */),
      trapFocus: () => this.mdcFocusTrap.trapFocus(),
      releaseFocus: () => this.mdcFocusTrap.releaseFocus(),
    };

    if (this.type === 'modal') {
      return new MDCModalDrawerFoundation(adapter);
    } else {
      return new MDCDismissibleDrawerFoundation(adapter);
    }
  }

  toggle() {
    this.open = !this.open;
  }
}
