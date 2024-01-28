import { closest } from '@material/dom/ponyfill';
import { booleanAttr, defaultSlotProcessContent, MdcComponent } from '@aurelia-mdc-web/base';
import { MDCChipActionAdapter, MDCChipActionFoundation, MDCChipActionCssClasses, MDCChipActionEvents, MDCChipActionFocusBehavior } from '@material/chips';
import { MDCRippleCapableSurface } from '@material/ripple';
import { MDCChipTrailingActionFoundation } from '@material/chips/action/trailing-foundation';
import { MDCChipPrimaryActionFoundation } from '@material/chips/action/primary-foundation';
import { GRAPHIC_SELECTED_WIDTH_STYLE_PROP, computePrimaryActionRippleClientRect } from '@material/chips/action/component-ripple';
import { bindable, customElement } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import template from './mdc-chip-action.html';

(MDCChipActionEvents as Record<string, string>).INTERACTION = MDCChipActionEvents.INTERACTION.toLowerCase();
(MDCChipActionEvents as Record<string, string>).NAVIGATION = MDCChipActionEvents.NAVIGATION.toLowerCase();

let actionId = 0;

/**
 * @hidden
 * @selector mdc-chip-action
 */
@customElement({ name: 'mdc-chip-action', template })
@processContent(defaultSlotProcessContent)
export class MdcChipAction extends MdcComponent<MDCChipActionFoundation> implements MDCRippleCapableSurface {
  constructor(public root: HTMLElement) {
    super(root);
    this.root.id = `mdc-chip-action-${++actionId}`;
  }

  @bindable({ set: booleanAttr })
  selectable: boolean;
  selectableChanged() {
    if (this.selectable) {
      this.root.setAttribute('role', 'option');
    } else {
      this.root.removeAttribute('role');
    }
  }

  _selected: boolean;

  get selected(): boolean {
    return this.foundation?.isSelected() ?? this._selected;
  }
  set selected(value: boolean) {
    this._selected = value;
    this.foundation?.setSelected(value);
  }

  @bindable({ set: booleanAttr })
  trailing: boolean;

  @bindable
  icon: string;

  @bindable({ set: booleanAttr })
  disabled: boolean;
  async disabledChanged() {
    await this.initialised;
    this.foundation?.setDisabled(this.disabled);
    if (this.disabled) {
      this.root.setAttribute('disabled', 'true');
    } else {
      this.root.removeAttribute('disabled');
    }
  }

  initialSyncWithDOM() {
    this.selectableChanged();
    this.disabledChanged();
    if (this._selected !== undefined) {
      this.selected = this._selected;
    }
  }

  handleClick() {
    this.foundation?.handleClick();
  }

  handleKeydown(event: KeyboardEvent) {
    this.foundation?.handleKeydown(event);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCChipActionAdapter = {
      emitEvent: (eventName, eventDetail) => {
        this.emit(eventName, eventDetail, true /* shouldBubble */);
      },
      focus: () => {
        this.root.focus();
      },
      getAttribute: (attrName) => this.root.getAttribute(attrName),
      getElementID: () => this.root.id,
      removeAttribute: (name) => {
        this.root.removeAttribute(name);
      },
      setAttribute: (name, value) => {
        this.root.setAttribute(name, value);
      },
    };

    if (this.root.classList.contains(MDCChipActionCssClasses.TRAILING_ACTION)) {
      return new MDCChipTrailingActionFoundation(adapter);
    }

    // Default to the primary foundation
    return new MDCChipPrimaryActionFoundation(adapter);
  }

  isFocusable(): boolean {
    return this.foundation?.isFocusable() ?? false;
  }

  setFocus(behavior: MDCChipActionFocusBehavior) {
    this.foundation?.setFocus(behavior);
  }

  computeRippleClientRect = () => {
    if (this.root.classList.contains(MDCChipActionCssClasses.PRIMARY_ACTION)) {
      const chipRoot = closest(this.root, `.${MDCChipActionCssClasses.CHIP_ROOT}`);
      // Return the root client rect since it's better than nothing
      if (!chipRoot) {
        return this.root.getBoundingClientRect();
      }
      const graphicWidth = window.getComputedStyle(chipRoot).getPropertyValue(
        GRAPHIC_SELECTED_WIDTH_STYLE_PROP);
      return computePrimaryActionRippleClientRect(
        chipRoot.getBoundingClientRect(), graphicWidth);
    }

    return this.root.getBoundingClientRect();
  };
}

/** @hidden */
export interface IMdcChipActionElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcChipAction;
    };
  };
}
