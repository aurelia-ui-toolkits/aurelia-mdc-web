import { inject, customElement, useView, PLATFORM, ViewCompiler, ViewResources, processContent, View } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MdcChipAction, IMdcChipActionElement } from '../mdc-chip-action/mdc-chip-action';
import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { MDCChipEvents, MDCChipAdapter, MDCChipActionType, MDCChipActionFocusBehavior, MDCChipAnimation } from '@material/chips';
import { ActionInteractionEvent, ActionNavigationEvent } from '@material/chips/chip/types';

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
@useView(PLATFORM.moduleName('./mdc-chip.html'))
@customElement('mdc-chip')
@processContent(MdcChip.processContent)
export class MdcChip extends MdcComponent<MDCChipFoundation> {
  constructor(root: IMdcChipElement) {
    super(root);
    defineMdcChipElementApis(this.root);
    this.root.id = `mdc-chip-${++chipId}`;
  }

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element) {

    const primaryAction = element.querySelector('[mdc-chip-action]:not([trailing])');
    primaryAction?.setAttribute('slot', 'primary-action');

    const trailingAction = element.querySelector('[mdc-chip-action][trailing]');
    trailingAction?.setAttribute('slot', trailingAction.hasAttribute('non-navigable') ? 'non-navigable-trailing-action' : 'trailing-action');

    return true;
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
  @bindable.booleanAttr
  disabled: boolean;

  /** Marks the chip as a filter chip. */
  @bindable.booleanAttr
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

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    this.actions = new Map();
    const primaryAction = this.root.querySelector<IMdcChipActionElement>('[mdc-chip-action]:not([trailing])')?.au.controller.viewModel;
    this.actions.set(MDCChipActionType.PRIMARY, primaryAction!);
    const trailingAction = this.root.querySelector<IMdcChipActionElement>('[mdc-chip-action][trailing]')?.au.controller.viewModel;
    if (trailingAction) {
      this.actions.set(MDCChipActionType.TRAILING, trailingAction);
    }
  }

  initialSyncWithDOM() {
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
