import { inject, customElement, INode, IPlatform, bindable } from 'aurelia';
import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { processContent, CustomElement } from '@aurelia/runtime-html';
import { MdcChipAction } from '../mdc-chip-action/mdc-chip-action';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { MDCChipEvents, MDCChipAdapter, MDCChipActionType, MDCChipActionFocusBehavior, MDCChipAnimation } from '@material/chips';
import { ActionInteractionEvent, ActionNavigationEvent } from '@material/chips/chip/types';
import template from './mdc-chip.html';

(MDCChipEvents as Record<string, string>).INTERACTION = MDCChipEvents.INTERACTION.toLowerCase();
(MDCChipEvents as Record<string, string>).ANIMATION = MDCChipEvents.ANIMATION.toLowerCase();
(MDCChipEvents as Record<string, string>).NAVIGATION = MDCChipEvents.NAVIGATION.toLowerCase();

let chipId = 0;

/**
 * @selector mdc-chip
 * @emits mdcchip:interaction | Indicates the chip was interacted with (via click/tap or Enter key)
 * @emits mdcchip:removal | Indicates the chip removal event from a chip set
 * @emits mdcchip:selection | Indicates a selection event has occurred on a chip
 */
@inject(Element)
@customElement({ name: 'mdc-chip', template })
@processContent(function processContent(node: INode, platform: IPlatform) {
  const element = node as HTMLElement;

  const primaryAction = element.querySelector('[as-element="mdc-chip-action"]:not([trailing])');
  if (primaryAction) {
    primaryAction.setAttribute('au-slot', 'primary-action');
    primaryAction.remove();
  }

  const trailingAction = element.querySelector('[as-element="mdc-chip-action"][trailing]');
  if (trailingAction) {
    trailingAction.setAttribute('au-slot', trailingAction.hasAttribute('non-navigable') ? 'non-navigable-trailing-action' : 'trailing-action');
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
  if (trailingAction) {
    element.appendChild(trailingAction);
  }
}
)
export class MdcChip extends MdcComponent<MDCChipFoundation> {
  constructor(root: IMdcChipElement) {
    super(root);
    defineMdcChipElementApis(this.root);
    this.root.id = `mdc-chip-${++chipId}`;
  }

  _selected: boolean;
  /**
   * @return Whether the chip is selected.
   */
  get selected(): boolean {
    return this.foundation?.isActionSelected(MDCChipActionType.PRIMARY) ?? this._selected;
  }

  /** Sets selected state on the chip. */
  set selected(selected: boolean) {
    this._selected = selected;
    this.foundation?.setActionSelected(MDCChipActionType.PRIMARY, selected);
  }

  /** Marks the chip as disabled. */
  @bindable({ set: booleanAttr })
  disabled: boolean;

  /** Marks the chip as a filter chip. */
  @bindable({ set: booleanAttr })
  filter: boolean;
  filterChanged() {
    if (this.filter) {
      this.root.setAttribute('role', 'presentation');
    } else {
      this.root.setAttribute('role', 'row');
    }
  }

  @bindable
  icon: string;

  actions: Map<MDCChipActionType, MdcChipAction>;

  beforeFoundationCreated() {
    this.actions = new Map();
    const primaryAction = CustomElement.for<MdcChipAction>(this.root.querySelector('.mdc-evolution-chip__action--primary')!).viewModel;
    this.actions.set(MDCChipActionType.PRIMARY, primaryAction);
    const trailingAction = this.root.querySelector('.mdc-evolution-chip__action--trailing');
    if (trailingAction) {
      this.actions.set(MDCChipActionType.TRAILING, CustomElement.for<MdcChipAction>(trailingAction).viewModel);
    }
  }

  initialSyncWithDOM() {
    this.filterChanged();
    if (this._selected !== undefined) {
      this.selected = this._selected;
    }
  }

  /** Set focus to the chip. */
  focus() {
    this.root.focus();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCChipAdapter = {
      addClass: (className) => {
        this.root.classList.add(className);
      },
      emitEvent: (eventName, eventDetail) => {
        this.emit(eventName, eventDetail, true /* shouldBubble */);
      },
      getActions: () => {
        const actions: MDCChipActionType[] = [];
        for (const [key] of this.actions) {
          actions.push(key);
        }
        return actions;
      },
      getAttribute: (attrName) => this.root.getAttribute(attrName),
      getElementID: () => this.root.id,
      getOffsetWidth: () => {
        return this.root.offsetWidth;
      },
      hasClass: (className) => this.root.classList.contains(className),
      isActionSelectable: (actionType: MDCChipActionType) => {
        const action = this.actions.get(actionType);
        if (action) {
          return action.selectable;
        }
        return false;
      },
      isActionSelected: (actionType: MDCChipActionType) => {
        const action = this.actions.get(actionType);
        if (action) {
          return action.selected;
        }
        return false;
      },
      isActionFocusable: (actionType: MDCChipActionType) => {
        const action = this.actions.get(actionType);
        if (action) {
          return action.isFocusable();
        }
        return false;
      },
      isActionDisabled: (actionType: MDCChipActionType) => {
        const action = this.actions.get(actionType);
        if (action) {
          return action.disabled;
        }
        return false;
      },
      isRTL: () => window.getComputedStyle(this.root).getPropertyValue(
        'direction') === 'rtl',
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      setActionDisabled: (actionType: MDCChipActionType, isDisabled: boolean) => {
        const action = this.actions.get(actionType);
        if (action) {
          action.disabled = isDisabled;
        }
      },
      setActionFocus: (actionType: MDCChipActionType, behavior: MDCChipActionFocusBehavior) => {
        const action = this.actions.get(actionType);
        if (action) {
          action.setFocus(behavior);
        }
      },
      setActionSelected: (actionType: MDCChipActionType, isSelected: boolean) => {
        const action = this.actions.get(actionType);
        if (action) {
          if (action.selected !== isSelected) {
            action.selected = isSelected;
          }
        }
      },
      setStyleProperty: (prop: string, value: string) => {
        this.root.style.setProperty(prop, value);
      },
    };

    // Default to the primary foundation
    return new MDCChipFoundation(adapter);
  }

  handleActionInteraction(event: ActionInteractionEvent): void {
    this.foundation?.handleActionInteraction(event);
    this.emit('change', {}, true);
  }

  handleActionNavigation(event: ActionNavigationEvent): void {
    this.foundation?.handleActionNavigation(event);
  }

  handleAnimationEnd(event: AnimationEvent) {
    this.foundation?.handleAnimationEnd(event);
  }

  handleTransitionEnd() {
    this.foundation?.handleTransitionEnd();
  }

  getActions(): MDCChipActionType[] {
    return this.foundation?.getActions() ?? [];
  }

  getElementID(): string {
    return this.foundation?.getElementID() ?? '';
  }

  isActionFocusable(action: MDCChipActionType): boolean {
    return this.foundation!.isActionFocusable(action);
  }

  isActionSelectable(action: MDCChipActionType): boolean {
    return this.foundation!.isActionSelectable(action);
  }

  isActionSelected(action: MDCChipActionType): boolean {
    return this.foundation!.isActionSelected(action);
  }

  setActionFocus(action: MDCChipActionType, focus: MDCChipActionFocusBehavior) {
    this.foundation!.setActionFocus(action, focus);
  }

  setActionSelected(action: MDCChipActionType, isSelected: boolean) {
    this.foundation!.setActionSelected(action, isSelected);
  }

  startAnimation(animation: MDCChipAnimation) {
    this.foundation!.startAnimation(animation);
  }

  remove() {
    const parent = this.root.parentNode;
    if (parent !== null) {
      parent.removeChild(this.root);
    }
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
        const chip = CustomElement.for<MdcChip>(this).viewModel;
        return chip.selected;
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
