import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCDismissibleDrawerFoundation, cssClasses, strings, MDCModalDrawerFoundation, util, MDCDrawerAdapter } from '@material/drawer';
import { MDCDrawerFocusTrapFactory } from '@material/drawer/util';
import { SpecificEventListener } from '@material/base';
import { MDCListFoundation } from '@material/list';
import { FocusTrap } from '@material/dom/focus-trap';
import { inject, useView, customElement, bindable } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

strings.CLOSE_EVENT = strings.CLOSE_EVENT.toLowerCase();
strings.OPEN_EVENT = strings.OPEN_EVENT.toLowerCase();

/**
 * @selector mdc-drawer
 * @emits mdcdrawer:closed | Event dispatched on drawer close
 * @emits mdcdrawer:opened | Event dispatched on drawer open
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-drawer.html'))
@customElement(cssClasses.ROOT)
export class MdcDrawer extends MdcComponent<MDCDismissibleDrawerFoundation | MDCModalDrawerFoundation> {

  /** Set the drawer implementation */
  @bindable
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

  private focusTrap_?: FocusTrap; // assigned in initialSyncWithDOM()
  private focusTrapFactory_!: MDCDrawerFocusTrapFactory; // assigned in initialize()

  private handleScrimClick_?: SpecificEventListener<'click'>; // initialized in initialSyncWithDOM()

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    this.focusTrapFactory_ = el => new FocusTrap(el);
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
        this.handleScrimClick_ = () => {
          this.open = false;
          return (this.foundation as MDCModalDrawerFoundation).handleScrimClick();
        };
        this.scrim_.addEventListener('click', this.handleScrimClick_);
        this.focusTrap_ = util.createFocusTrapInstance(this.root, this.focusTrapFactory_);
      }
    }
  }

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
        const activeNavItemEl = this.root.querySelector<HTMLElement>(
          `.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`);
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => this.emit(strings.CLOSE_EVENT, {}, true /* shouldBubble */),
      notifyOpen: () => this.emit(strings.OPEN_EVENT, {}, true /* shouldBubble */),
      trapFocus: () => this.focusTrap_?.trapFocus(),
      releaseFocus: () => this.focusTrap_?.releaseFocus(),
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
