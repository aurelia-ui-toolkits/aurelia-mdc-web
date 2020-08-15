import { inject, customElement, useView, PLATFORM, child, ViewCompiler, ViewResources, processContent } from 'aurelia-framework';
import { MDCChipFoundation, MDCChipAdapter, chipCssClasses,
  MDCChipInteractionEventDetail, MDCChipSelectionEventDetail, MDCChipRemovalEventDetail, MDCChipNavigationEventDetail } from '@material/chips';
import { MdcChipPrimaryAction, IMdcChipPrimaryActionElement } from '../mdc-chip-primary-action/mdc-chip-primary-action';
import { MdcChipCheckmark, IMdcChipCheckmarkElement } from '../mdc-chip-checkmark';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MdcChipIcon, IMdcChipIconElement } from '../mdc-chip-icon/mdc-chip-icon';
import { bindable } from 'aurelia-typed-observable-plugin';

MDCChipFoundation.strings.REMOVAL_EVENT = MDCChipFoundation.strings.REMOVAL_EVENT.toLowerCase();
MDCChipFoundation.strings.SELECTION_EVENT = MDCChipFoundation.strings.SELECTION_EVENT.toLowerCase();
MDCChipFoundation.strings.NAVIGATION_EVENT = MDCChipFoundation.strings.NAVIGATION_EVENT.toLowerCase();
MDCChipFoundation.strings.INTERACTION_EVENT = MDCChipFoundation.strings.INTERACTION_EVENT.toLowerCase();
MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT = MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT.toLowerCase();

let chipId = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip.html'))
@customElement('mdc-chip')
@processContent(MdcChip.processContent)
export class MdcChip extends MdcComponent<MDCChipFoundation> {
  cssClasses = chipCssClasses;

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element) {

    const primaryAction = element.querySelector('mdc-chip-primary-action');
    primaryAction?.setAttribute('slot', 'primary-action');

    const chipText = element.querySelector('mdc-chip-text');
    chipText?.setAttribute('slot', 'chip-text');

    // move icon to the slot - this allows omitting slot specification
    const leadingIcon = element.querySelector('mdc-chip-icon[leading]');
    leadingIcon?.setAttribute('slot', 'leading-icon');

    // move icon to the slot - this allows omitting slot specification
    const trailingIcon = element.querySelector('mdc-chip-icon[trailing]');
    trailingIcon?.setAttribute('slot', 'trailing-icon');

    const checkMark = element.querySelector('mdc-chip-checkmark');
    checkMark?.setAttribute('slot', 'checkmark');

    return true;
  }

  id: string = `mdc-chip-${++chipId}`;

  @bindable.booleanAttr
  touch: boolean;

  @child('mdc-chip-primary-action')
  primaryActionElement?: MdcChipPrimaryAction;

  @child('mdc-chip-icon.mdc-chip-icon--leading')
  leadingIconElement?: MdcChipIcon;

  @child('mdc-chip-icon.mdc-chip-icon--trailing')
  trailingIconElement?: MdcChipIcon;

  @child('mdc-chip-checkmark')
  checkmarkElement?: MdcChipCheckmark;

  @bindable.number
  tabindex: number = 0;

  @bindable
  role: string = 'button';

  @bindable
  leadingIcon?: string;

  @bindable.booleanAttr
  checkmark?: boolean;

    /**
   * @return Whether the chip is selected.
   */
  get selected(): boolean {
    return this.foundation?.isSelected() ?? false;
  }

  /**
   * Sets selected state on the chip.
   */
  set selected(selected: boolean) {
    this.foundation?.setSelected(selected);
  }

  /**
   * @return Whether a trailing icon click should trigger exit/removal of the chip.
   */
  get shouldRemoveOnTrailingIconClick(): boolean {
    return this.foundation?.getShouldRemoveOnTrailingIconClick() ?? false;
  }

  /**
   * Sets whether a trailing icon click should trigger exit/removal of the chip.
   */
  set shouldRemoveOnTrailingIconClick(shouldRemove: boolean) {
    this.foundation?.setShouldRemoveOnTrailingIconClick(shouldRemove);
  }

  /**
   * Sets whether a clicking on the chip should focus the primary action.
   */
  set setShouldFocusPrimaryActionOnClick(shouldFocus: boolean) {
    this.foundation?.setShouldFocusPrimaryActionOnClick(shouldFocus);
  }

  async attached(): Promise<void> {
    /* @Child does not really work well when there is a span element between the chip and the child element;
       it has also problems with defaults for slots */
    if(this.primaryActionElement === undefined) {
      const element = this.root.querySelector('mdc-chip-primary-action');
      if(element) {
        this.primaryActionElement = (element as IMdcChipPrimaryActionElement).au.controller.viewModel;
      }
    }
    if(this.leadingIconElement === undefined) {
      const element = this.root.querySelector('mdc-chip-icon.mdc-chip-icon--leading');
      if(element) {
        this.leadingIconElement = (element as IMdcChipIconElement).au.controller.viewModel;
      }
    }
    if(this.trailingIconElement === undefined) {
      const element = this.root.querySelector('mdc-chip-icon.mdc-chip-icon--trailing');
      if(element) {
        this.trailingIconElement = (element as IMdcChipIconElement).au.controller.viewModel;
      }
    }
    if(this.checkmarkElement === undefined) {
      const element = this.root.querySelector('mdc-chip-checkmark');
      if(element) {
        this.checkmarkElement = (element as IMdcChipCheckmarkElement).au.controller.viewModel;
      }
    }
    return super.attached();
  }

  focus() {
    this.root.focus();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCChipAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      addClassToLeadingIcon: (className: string) =>
        this.leadingIconElement?.element?.classList?.add(className),
      removeClassFromLeadingIcon: (className: string) =>
        this.leadingIconElement?.element?.classList?.remove(className),
      eventTargetHasClass: (target: EventTarget | null, className: string) =>
        (target && (target as Element).classList) ? (target as Element).classList.contains(className) : false,
      getAttribute: (attr: string) => this.root.getAttribute(attr),
      notifyInteraction: () => this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.INTERACTION_EVENT,
        { chipId: this.id }, true /* bubble */),
      notifySelection: (selected: boolean, chipSetShouldIgnore: boolean) =>
        this.emit<MDCChipSelectionEventDetail>(MDCChipFoundation.strings.SELECTION_EVENT, {
          chipId: this.id,
          selected: selected,
          shouldIgnore: chipSetShouldIgnore
        }, true),
      notifyTrailingIconInteraction: () =>
        this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT, {
            chipId: this.id
          }, true),
      notifyRemoval: (removedAnnouncement) =>
        this.emit<MDCChipRemovalEventDetail>(MDCChipFoundation.strings.REMOVAL_EVENT, {
          chipId: this.id,
          removedAnnouncement: removedAnnouncement
        }, true),
      notifyNavigation: (key: string, source: any) =>
        this.emit<MDCChipNavigationEventDetail>(MDCChipFoundation.strings.NAVIGATION_EVENT, {
          chipId: this.id,
          key: key,
          source: source
        }, true),
      notifyEditStart: () =>
        this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.INTERACTION_EVENT, {
          chipId: this.id
        }, true),
      notifyEditFinish: () =>
        this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.INTERACTION_EVENT, {
          chipId: this.id
        }, true),
      getComputedStyleValue: (propertyName: string) =>
        window.getComputedStyle(this.root).getPropertyValue(propertyName),
      setStyleProperty: (propertyName: string, value: string) =>
        this.root.style.setProperty(propertyName, value),
      hasLeadingIcon: () => !!this.leadingIconElement,
      getRootBoundingClientRect: () => this.root.getBoundingClientRect(),
      getCheckmarkBoundingClientRect: () =>
        this.checkmarkElement?.element?.getBoundingClientRect() ?? null,
      setPrimaryActionAttr: (attr: string, value: string) => this.primaryActionElement?.root?.setAttribute(attr, value),
      focusPrimaryAction: () => this.primaryActionElement?.focus(),
      focusTrailingAction: () => this.trailingIconElement?.focus(),
      removeTrailingActionFocus: () => {},
      isTrailingActionNavigable: () => true,
      isRTL: () => typeof window !== 'undefined' ?
        window.getComputedStyle(this.root).getPropertyValue('direction') === 'rtl' : false,
    };
    return new MDCChipFoundation(adapter);
  }

  handleClick_(/*evt: MouseEvent*/) {
    this.foundation?.handleClick();
    return true;
  }
  handleKeydown_(evt: KeyboardEvent) {
    this.foundation?.handleKeydown(evt);
    return true;
  }
  handleTransitionEnd_(evt: TransitionEvent) {
    this.foundation?.handleTransitionEnd(evt);
    return true;
  };
  handleFocusIn_(evt: FocusEvent) {
    this.foundation?.handleFocusIn(evt);
    return true;
  };
  handleFocusOut_(evt: FocusEvent) {
    this.foundation?.handleFocusOut(evt);
    return true;
  };

  setSelectedFromChipSet(selected: boolean, shouldNotifyClients: boolean) {
    this.foundation?.setSelectedFromChipSet(selected, shouldNotifyClients);
  }

  focusPrimaryAction() {
    this.foundation?.focusPrimaryAction();
  }

  focusTrailingAction() {
    this.foundation?.focusTrailingAction();
  }

  removeFocus() {
    this.foundation?.removeFocus();
  }
}
