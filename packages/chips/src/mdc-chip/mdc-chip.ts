import { inject, customElement, useView, PLATFORM, ViewCompiler, ViewResources, processContent, View } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import {
  MDCChipFoundation, MDCChipAdapter, chipCssClasses,
  MDCChipInteractionEventDetail, MDCChipSelectionEventDetail, MDCChipRemovalEventDetail, MDCChipNavigationEventDetail, MDCChipTrailingActionNavigationEvent
} from '@material/chips';
import { EventSource } from '@material/chips/chip/constants';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MdcChipPrimaryAction, IMdcChipPrimaryActionElement } from '../mdc-chip-primary-action/mdc-chip-primary-action';
import { MdcChipCheckmark, IMdcChipCheckmarkElement } from '../mdc-chip-checkmark';
import { MdcChipIcon, IMdcChipIconElement } from '../mdc-chip-icon/mdc-chip-icon';
import { MdcChipTrailingAction, IMdcChipTrailingActionElement } from '../mdc-chip-trailing-action/mdc-chip-trailing-action';

MDCChipFoundation.strings.REMOVAL_EVENT = MDCChipFoundation.strings.REMOVAL_EVENT.toLowerCase();
MDCChipFoundation.strings.SELECTION_EVENT = MDCChipFoundation.strings.SELECTION_EVENT.toLowerCase();
MDCChipFoundation.strings.NAVIGATION_EVENT = MDCChipFoundation.strings.NAVIGATION_EVENT.toLowerCase();
MDCChipFoundation.strings.INTERACTION_EVENT = MDCChipFoundation.strings.INTERACTION_EVENT.toLowerCase();
MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT = MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT.toLowerCase();

let chipId = 0;

/**
 * @selector mdc-chip
 * @emits mdcchip:interaction | Indicates the chip was interacted with (via click/tap or Enter key)
 * @emits mdcchip:removal | Indicates the chip removal event from a chip set
 * @emits mdcchip:selection | Indicates the chip's selection state has changed (for choice/filter chips)
 * @emits mdcchip:navigation | Indicates a navigation event has occurred on a chip
 * @emits mdcchip:trailingiconinteraction | Indicates the chip's trailing icon was interacted with (via click/tap or Enter key)
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip.html'))
@customElement('mdc-chip')
@processContent(MdcChip.processContent)
export class MdcChip extends MdcComponent<MDCChipFoundation> {
  constructor(root: IMdcChipElement) {
    super(root);
    defineMdcChipElementApis(this.root);
  }

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

    const trailingAction = element.querySelector('[mdc-chip-trailing-action]');
    trailingAction?.setAttribute('slot', 'trailing-action');

    return true;
  }

  id: string = `mdc-chip-${++chipId}`;

  /** Set the component touch target to 48 x 48 px. */
  @bindable.booleanAttr
  touch: boolean;

  primaryAction_?: MdcChipPrimaryAction;
  leadingIcon_?: MdcChipIcon;
  trailingIcon_?: MdcChipIcon;
  checkmark_?: MdcChipCheckmark;
  trailingAction_?: MdcChipTrailingAction;

  /** Leading material icon ligature. */
  @bindable
  leadingIcon?: string;

  /** Trailing material icon ligature. */
  @bindable
  trailingIcon?: string;

  /** Trailing action material icon ligature. */
  @bindable
  trailingAction?: string;

  /** Indicates the presence of a checkmark. */
  @bindable.booleanAttr
  checkmark?: boolean;

  /** Data to pass with events. */
  @bindable
  data: unknown;

  /** Sets whether a trailing icon click should not trigger exit/removal of the chip. (Default is false) */
  @bindable.booleanAttr
  nonRemovable: boolean;
  async nonRemovableChanged() {
    await this.initialised;
    this.foundation?.setShouldRemoveOnTrailingIconClick(!this.nonRemovable);
  }

  /** Sets whether a click should trigger the primary action focus. */
  @bindable.booleanAttr
  focusPrimary: boolean;
  async focusPrimaryChanged() {
    await this.initialised;
    this.foundation?.setShouldFocusPrimaryActionOnClick(this.focusPrimary);
  }

  selected_?: boolean;
  /**
   * @return Whether the chip is selected.
   */
  get selected(): boolean {
    if (this.foundation) {
      return this.foundation.isSelected();
    } else {
      return this.selected_ ?? false;
    }
  }

  /** Sets selected state on the chip. */
  set selected(selected: boolean) {
    this.selected_ = selected;
    if (this.foundation) {
      this.foundation.setSelected(selected);
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    this.primaryAction_ = this.root.querySelector<IMdcChipPrimaryActionElement>('mdc-chip-primary-action')?.au.controller.viewModel;
    this.leadingIcon_ = this.root.querySelector<IMdcChipIconElement>('mdc-chip-icon.mdc-chip__icon--leading')?.au.controller.viewModel;
    this.trailingIcon_ = this.root.querySelector<IMdcChipIconElement>('mdc-chip-icon.mdc-chip__icon--trailing')?.au.controller.viewModel;
    this.checkmark_ = this.root.querySelector<IMdcChipCheckmarkElement>('mdc-chip-checkmark')?.au.controller.viewModel;
    this.trailingAction_ = this.root.querySelector<IMdcChipTrailingActionElement>('.mdc-chip-trailing-action')?.au.controller.viewModel;
  }

  initialSyncWithDOM() {
    if (this.selected_ !== undefined) {
      this.selected = this.selected_;
    }
  }

  /** Set focus to the chip. */
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
      addClassToLeadingIcon: (className: string) => this.leadingIcon_?.root?.classList?.add(className),
      removeClassFromLeadingIcon: (className: string) => this.leadingIcon_?.root?.classList?.remove(className),
      eventTargetHasClass: (target: EventTarget | null, className: string) =>
        (target && (target as Element).classList) ? (target as Element).classList.contains(className) : false,
      getAttribute: (attr: string) => this.root.getAttribute(attr),
      notifyInteraction: () => this.emit<MDCChipInteractionEventDetail & { data: unknown }>(MDCChipFoundation.strings.INTERACTION_EVENT, {
        chipId: this.id,
        data: this.data
      }, true /* bubble */),
      notifySelection: (selected: boolean, chipSetShouldIgnore: boolean) =>
        this.emit<MDCChipSelectionEventDetail & { data: unknown }>(MDCChipFoundation.strings.SELECTION_EVENT, {
          chipId: this.id,
          data: this.data,
          selected: selected,
          shouldIgnore: chipSetShouldIgnore
        }, true),
      notifyTrailingIconInteraction: () =>
        this.emit<MDCChipInteractionEventDetail & { data: unknown }>(MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT, {
          chipId: this.id,
          data: this.data
        }, true),
      notifyRemoval: (removedAnnouncement) =>
        this.emit<MDCChipRemovalEventDetail & { data: unknown }>(MDCChipFoundation.strings.REMOVAL_EVENT, {
          chipId: this.id,
          data: this.data,
          removedAnnouncement: removedAnnouncement
        }, true),
      notifyNavigation: (key: string, source: EventSource) =>
        this.emit<MDCChipNavigationEventDetail & { data: unknown }>(MDCChipFoundation.strings.NAVIGATION_EVENT, {
          chipId: this.id,
          data: this.data,
          key: key,
          source: source
        }, true),
      notifyEditStart: () =>
        this.emit<MDCChipInteractionEventDetail & { data: unknown }>(MDCChipFoundation.strings.INTERACTION_EVENT, {
          chipId: this.id,
          data: this.data
        }, true),
      notifyEditFinish: () =>
        this.emit<MDCChipInteractionEventDetail & { data: unknown }>(MDCChipFoundation.strings.INTERACTION_EVENT, {
          chipId: this.id,
          data: this.data
        }, true),
      getComputedStyleValue: (propertyName: string) => window.getComputedStyle(this.root).getPropertyValue(propertyName),
      setStyleProperty: (propertyName: string, value: string) => this.root.style.setProperty(propertyName, value),
      hasLeadingIcon: () => !!this.leadingIcon_,
      getRootBoundingClientRect: () => this.root.getBoundingClientRect(),
      getCheckmarkBoundingClientRect: () => this.checkmark_?.root?.getBoundingClientRect() ?? null,
      setPrimaryActionAttr: (attr: string, value: string) => this.primaryAction_?.root?.setAttribute(attr, value),
      focusPrimaryAction: () => this.primaryAction_?.focus(),
      focusTrailingAction: () => this.trailingAction_?.focus(),
      removeTrailingActionFocus: () => this.trailingAction_?.removeFocus(),
      isTrailingActionNavigable: () => this.trailingAction_?.isNavigable() ?? false,
      isRTL: () => typeof window !== 'undefined' ? window.getComputedStyle(this.root).getPropertyValue('direction') === 'rtl' : false,
    };
    return new MDCChipFoundation(adapter);
  }

  handleClick_(evt: MouseEvent) {
    if (evt.target === this.trailingIcon_?.root) {
      this.foundation?.handleTrailingActionInteraction();
    }
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
  }

  handleFocusIn_(evt: FocusEvent) {
    this.foundation?.handleFocusIn(evt);
    return true;
  }

  handleFocusOut_(evt: FocusEvent) {
    this.foundation?.handleFocusOut(evt);
    return true;
  }

  handleTrailingActionInteraction_(): void {
    this.foundation?.handleTrailingActionInteraction();
  }

  handleTrailingActionNavigation_(evt: MDCChipTrailingActionNavigationEvent): void {
    this.foundation?.handleTrailingActionNavigation(evt);
  }

  setSelectedFromChipSet(selected: boolean, shouldNotifyClients: boolean) {
    this.foundation?.setSelectedFromChipSet(selected, shouldNotifyClients);
  }

  focusPrimaryAction() {
    this.foundation?.focusPrimaryAction();
  }

  focusTrailingAction() {
    this.foundation?.focusTrailingAction();
  }

  /** Remove focus from the chip. */
  removeFocus() {
    this.foundation?.removeFocus();
  }
}

/** @hidden */
export interface IMdcChipElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcChip;
    };
  };
}

function defineMdcChipElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    type: {
      value: 'checkbox',
    },
    checked: {
      get(this: IMdcChipElement) {
        return this.au.controller.viewModel.selected;
      },
      set(this: IMdcChipElement, value: boolean) {
        this.au.controller.viewModel.selected = value;
      },
      configurable: true
    },
    focus: {
      value(this: IMdcChipElement) {
        this.au.controller.viewModel.focus();
      },
      configurable: true
    }
  });
}
