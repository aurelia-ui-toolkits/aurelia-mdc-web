import { booleanAttr, defaultSlotProcessContent, MdcComponent } from '@aurelia-mdc-web/base';
import { CustomElement, processContent } from '@aurelia/runtime-html';
import { inject, customElement, bindable } from 'aurelia';
import { MDCSegmentedButtonSegmentAdapter, MDCSegmentedButtonSegmentFoundation, SegmentDetail } from '@material/segmented-button';
import { events } from '@material/segmented-button/segmented-button/constants';

/**
 * @selector button[mdc-segmented-button-segment]
 */
@inject(Element)
@customElement('mdc-segmented-button-segment')
@processContent(defaultSlotProcessContent)
export class MdcSegmentedButtonSegment extends MdcComponent<MDCSegmentedButtonSegmentFoundation> {
  constructor(root: IMdcSegmentedButtonSegmentElement) {
    super(root);
    defineMdcSegmentedButtonSegmentElementApis(root);
  }

  private isSingleSelect: boolean;
  private index: number;

  /** Indicates the segment has touch target support */
  @bindable({ set: booleanAttr })
  touch: boolean;

  /** Sets an icon in the segment */
  @bindable
  icon: string;

  private _checked?: boolean;
  /** Use to verify the checked value */
  get checked(): boolean {
    if (this.foundation) {
      return this.foundation?.isSelected();
    } else {
      return this._checked ?? false;
    }
  }

  /**
   * Whether the segment is checked.
   */
  set checked(value: boolean) {
    this._checked = value;
    if (value) {
      this.foundation?.setSelected();
    } else {
      this.foundation?.setUnselected();
    }
  }

  handleClick() {
    this.foundation?.handleClick();
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async beforeFoundationCreated() {
    if (this.root.hasAttribute('checked')) {
      const attributeValue = this.root.getAttribute('checked');

      if (attributeValue || attributeValue === '') {
        this.checked = true;
      }
    }
  }

  initialSyncWithDOM() {
    if (this._checked !== undefined) {
      this.checked = this._checked;
    }
  }

  getDefaultFoundation(): MDCSegmentedButtonSegmentFoundation {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    const adapter: MDCSegmentedButtonSegmentAdapter = {
      isSingleSelect: () => {
        return this.isSingleSelect;
      },
      getAttr: (attrName) => {
        return this.root.getAttribute(attrName);
      },
      setAttr: (attrName, value) => {
        this.root.setAttribute(attrName, value);
      },
      addClass: (className) => {
        this.root.classList.add(className);
      },
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      hasClass: (className) => {
        return this.root.classList.contains(className);
      },
      notifySelectedChange: selected => this.notifySelectedChange(events.SELECTED, selected),
      getRootBoundingClientRect: () => {
        return this.root.getBoundingClientRect();
      }
    };
    return new MDCSegmentedButtonSegmentFoundation(adapter);
  }

  notifySelectedChange(event: string, selected: boolean) {
    this.emit<SegmentDetail>(
      event, {
      index: this.index,
      selected,
      segmentId: this.getSegmentId()
    }, true /* shouldBubble */);
  }

  setIsSingleSelect(isSingleSelect: boolean) {
    this.isSingleSelect = isSingleSelect;
    this.root.setAttribute('role', isSingleSelect ? 'radio' : '');
  }

  /**
   * Sets segment's index value
   *
   * @hidden
   * @param index Segment's index within wrapping segmented button
   */
  setIndex(index: number) {
    this.index = index;
  }

  /**
   * @hidden
   * @return Returns segment's segmentId if it was set by client
   */
  getSegmentId(): string | undefined {
    return this.foundation?.getSegmentId();
  }
}

/** @hidden */
export interface IMdcSegmentedButtonSegmentElement extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcSegmentedButtonSegment;
    };
  };
}

function defineMdcSegmentedButtonSegmentElementApis(element: IMdcSegmentedButtonSegmentElement) {
  Object.defineProperties(element, {
    type: {
      value: 'checkbox'
    },
    checked: {
      get(this: IMdcSegmentedButtonSegmentElement) {
        return CustomElement.for<MdcSegmentedButtonSegment>(this).viewModel.checked;
      },
      set(this: IMdcSegmentedButtonSegmentElement, value: boolean) {
        CustomElement.for<MdcSegmentedButtonSegment>(this).viewModel.checked = value;
      },
      configurable: true
    }
  });
}
