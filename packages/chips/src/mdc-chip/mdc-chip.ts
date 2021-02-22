import { inject, customElement, INode, IPlatform, bindable } from 'aurelia';
import {
  MDCChipFoundation, MDCChipAdapter, chipCssClasses,
  MDCChipInteractionEventDetail, MDCChipSelectionEventDetail, MDCChipRemovalEventDetail, MDCChipNavigationEventDetail, MDCChipTrailingActionNavigationEvent
} from '@material/chips';
import { EventSource } from '@material/chips/chip/constants';
import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MdcChipPrimaryAction } from '../mdc-chip-primary-action/mdc-chip-primary-action';
import { MdcChipCheckmark } from '../mdc-chip-checkmark';
import { MdcChipIcon } from '../mdc-chip-icon/mdc-chip-icon';
import { MdcChipTrailingAction } from '../mdc-chip-trailing-action/mdc-chip-trailing-action';
import { processContent, CustomElement } from '@aurelia/runtime-html';

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
@customElement('mdc-chip')
// @processContent(MdcChip.processContent)
export class MdcChip extends MdcComponent<MDCChipFoundation> {
  constructor(root: IMdcChipElement) {
    super(root);
    defineMdcChipElementApis(this.root);
  }

  cssClasses = chipCssClasses;

  static processContent(node: INode, platform: IPlatform) {
    const element = node as HTMLElement;

    const primaryAction = element.querySelector('mdc-chip-primary-action');
    if (primaryAction) {
      primaryAction.setAttribute('au-slot', 'primary-action');
      primaryAction.remove();
    }

    const chipText = element.querySelector('mdc-chip-text');
    if (chipText) {
      chipText.setAttribute('au-slot', 'chip-text');
      chipText.remove();
    }

    // move icon to the slot - this allows omitting slot specification
    const leadingIcon = element.querySelector('mdc-chip-icon[leading]');
    if (leadingIcon) {
      leadingIcon.setAttribute('au-slot', 'leading-icon');
      leadingIcon.remove();
    }

    // move icon to the slot - this allows omitting slot specification
    const trailingIcon = element.querySelector('mdc-chip-icon[trailing]');
    if (trailingIcon) {
      trailingIcon.setAttribute('au-slot', 'trailing-icon');
      trailingIcon.remove();
    }

    const checkMark = element.querySelector('mdc-chip-checkmark');
    if (checkMark) {
      checkMark.setAttribute('au-slot', 'checkmark');
      checkMark.remove();
    }

    const trailingAction = element.querySelector('[as-element="mdc-chip-trailing-action"]');
    if (trailingAction) {
      trailingAction.setAttribute('au-slot', 'trailing-action');
      trailingAction.remove();
    }

    const template = platform.document.createElement('template');
    template.setAttribute('au-slot', '');
    template.innerHTML = element.innerHTML;
    element.innerHTML = '';
    element.appendChild(template);

    if (primaryAction) {
      element.appendChild(primaryAction);
    }
    if (chipText) {
      element.appendChild(chipText);
    }
    if (leadingIcon) {
      element.appendChild(leadingIcon);
    }
    if (trailingIcon) {
      element.appendChild(trailingIcon);
    }
    if (checkMark) {
      element.appendChild(checkMark);
    }
    if (trailingAction) {
      element.appendChild(trailingAction);
    }
  }

  id: string = `mdc-chip-${++chipId}`;

  /** Set the component touch target to 48 x 48 px. */
  @bindable({ set: booleanAttr })
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
  @bindable({ set: booleanAttr })
  checkmark?: boolean;

  /** Data to pass with events. */
  @bindable
  data: unknown;

  /** Sets whether a trailing icon click should not trigger exit/removal of the chip. (Default is false) */
  @bindable({ set: booleanAttr })
  nonRemovable: boolean;
  nonRemovableChanged() {
    this.foundation?.setShouldRemoveOnTrailingIconClick(!this.nonRemovable);
  }

  /** Sets whether a click should trigger the primary action focus. */
  @bindable({ set: booleanAttr })
  focusPrimary: boolean;
  focusPrimaryChanged() {
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

  beforeFoundationCreated() {
    const primaryActionEl = this.root.querySelector('mdc-chip-primary-action');
    this.primaryAction_ = primaryActionEl ? CustomElement.for<MdcChipPrimaryAction>(primaryActionEl).viewModel : undefined;

    const leadingIconEl = this.root.querySelector('mdc-chip-icon.mdc-chip__icon--leading');
    this.leadingIcon_ = leadingIconEl ? CustomElement.for<MdcChipIcon>(leadingIconEl).viewModel : undefined;

    const trailingIconEl = this.root.querySelector('mdc-chip-icon.mdc-chip__icon--trailing');
    this.trailingIcon_ = trailingIconEl ? CustomElement.for<MdcChipIcon>(trailingIconEl).viewModel : undefined;

    const checkmarkEl = this.root.querySelector('mdc-chip-checkmark');
    this.checkmark_ = checkmarkEl ? CustomElement.for<MdcChipCheckmark>(checkmarkEl).viewModel : undefined;

    const trailingActionEl = this.root.querySelector('.mdc-chip-trailing-action');
    this.trailingAction_ = trailingActionEl ? CustomElement.for<MdcChipTrailingAction>(trailingActionEl).viewModel : undefined;
  }

  initialSyncWithDOM() {
    this.focusPrimaryChanged();
    this.nonRemovableChanged();
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
  $au: {
    'au:resource:custom-element': {
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
        return CustomElement.for<MdcChip>(this).viewModel.selected;
      },
      set(this: IMdcChipElement, value: boolean) {
        CustomElement.for<MdcChip>(this).viewModel.selected = value;
      },
      configurable: true
    },
    focus: {
      value(this: IMdcChipElement) {
        CustomElement.for<MdcChip>(this).viewModel.focus();
      },
      configurable: true
    }
  });
}
