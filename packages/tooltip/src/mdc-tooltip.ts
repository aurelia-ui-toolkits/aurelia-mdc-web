import { MdcComponent, defaultSlotProcessContent, booleanAttr, number } from '@aurelia-mdc-web/base';
import { MDCTooltipFoundation, MDCTooltipAdapter, events, XPosition, YPosition, AnchorBoundaryType, attributes, CssClasses, PositionWithCaret } from '@material/tooltip';
import { inject, customElement, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
/**
 * @selector mdc-tooltip
 */
@inject(Element)
@customElement('mdc-tooltip')
@processContent(defaultSlotProcessContent)
export class MdcTooltip extends MdcComponent<MDCTooltipFoundation> implements EventListenerObject {

  /** Sets the anchor element */
  @bindable
  anchorElem?: HTMLElement;

  @bindable({ set: booleanAttr })
  rich: boolean;

  @bindable({ set: booleanAttr })
  persistent: boolean;

  /** Sets the horizontal alignment of the tooltip */
  @bindable
  xPosition?: keyof typeof XPosition;
  xPositionChanged() {
    if (this.xPosition !== undefined) {
      this.foundation?.setTooltipPosition({ xPos: XPosition[this.xPosition] });
    }
  }

  /** Sets the vertical alignment of the tooltip */
  @bindable
  yPosition?: keyof typeof YPosition;
  yPositionChanged() {
    if (this.yPosition !== undefined) {
      this.foundation?.setTooltipPosition({ yPos: YPosition[this.yPosition] });
    }
  }

  /** Sets the caret position relative to the tooltip */
  @bindable
  withCaretPos?: keyof typeof PositionWithCaret;
  async withCaretPosChanged() {
    if (this.withCaretPos !== undefined) {
      await this.initialised;
      this.foundation?.setTooltipPosition({ withCaretPos: PositionWithCaret[this.withCaretPos] });
    }
  }

  /** Specifies whether the anchor element is bounded (element has an identifiable boundary such as a button) or unbounded (element does not have a visually declared boundary such as a text link).
   * Tooltips are placed closer to bounded anchor elements compared to unbounded anchor elements. If no type is specified, defaults to BOUNDED.
   **/
  @bindable
  boundaryType?: keyof typeof AnchorBoundaryType;
  boundaryTypeChanged() {
    if (this.boundaryType !== undefined) {
      this.foundation?.setAnchorBoundaryType(AnchorBoundaryType[this.boundaryType]);
    }
  }

  /** Sets show delay */
  @bindable({ set: number })
  showDelay: number;
  async showDelayChanged() {
    await this.initialised;
    this.foundation?.setShowDelay(this.showDelay);
  }

  /** Sets hide delay */
  @bindable({ set: number })
  hideDelay: number;
  async hideDelayChanged() {
    await this.initialised;
    this.foundation?.setHideDelay(this.hideDelay);
  }

  beforeFoundationCreated() {
    if (this.persistent) {
      this.root.setAttribute(attributes.PERSISTENT, 'true');
    }
  }

  initialSyncWithDOM() {
    this.xPositionChanged();
    this.yPositionChanged();
    this.boundaryTypeChanged();
    if (this.rich && this.persistent) {
      this.anchorElem?.addEventListener('click', this);
    } else {
      this.anchorElem?.addEventListener('mouseenter', this);
      // TODO(b/157075286): Listening for a 'focus' event is too broad.
      this.anchorElem?.addEventListener('focus', this);
      this.anchorElem?.addEventListener('mouseleave', this);
      this.anchorElem?.addEventListener('touchstart', this);
      this.anchorElem?.addEventListener('touchend', this);
    }
  }

  destroy() {
    if (!this.anchorElem) {
      return;
    }

    if (this.rich && this.persistent) {
      this.anchorElem.removeEventListener('click', this);
    } else {
      this.anchorElem.removeEventListener('mouseenter', this);
      this.anchorElem.removeEventListener('focus', this);
      this.anchorElem.removeEventListener('mouseleave', this);
      this.anchorElem.removeEventListener('touchstart', this);
      this.anchorElem.removeEventListener('touchend', this);
    }
  }

  handleEvent(evt: Event): void {
    switch (evt.type) {
      case 'click': this.handleClick(); break;
      case 'mouseenter': this.handleMouseEnter(); break;
      case 'focus': this.handleFocus(evt as FocusEvent); break;
      case 'mouseleave': this.handleMouseLeave(); break;
    }
  }

  handleMouseEnter() {
    this.foundation?.handleAnchorMouseEnter();
  }

  handleFocus(evt: FocusEvent) {
    this.foundation?.handleAnchorFocus(evt);
  }

  handleMouseLeave() {
    this.foundation?.handleAnchorMouseLeave();
  }

  handleTouchstart() {
    this.foundation?.handleAnchorTouchstart();
  }

  handleTouchend() {
    this.foundation?.handleAnchorTouchend();
  }

  handleClick() {
    this.foundation?.handleAnchorClick();
  }

  handleTransitionEnd() {
    this.foundation?.handleTransitionEnd();
  }

  getDefaultFoundation() {
    const adapter: MDCTooltipAdapter = {
      getAttribute: (attr) => this.root.getAttribute(attr),
      setAttribute: (attr, value) => {
        this.root.setAttribute(attr, value);
      },
      addClass: (className) => {
        this.root.classList.add(className);
      },
      hasClass: (className) => this.root.classList.contains(className),
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      getComputedStyleProperty: (propertyName) => {
        return window.getComputedStyle(this.root).getPropertyValue(
          propertyName);
      },
      setStyleProperty: (propertyName, value) => {
        this.root.style.setProperty(propertyName, value);
      },
      setSurfaceAnimationStyleProperty: (propertyName, value) => {
        const surface = this.root.querySelector<HTMLElement>(
          `.${CssClasses.SURFACE_ANIMATION}`);
        surface?.style.setProperty(propertyName, value);
      },
      getViewportWidth: () => window.innerWidth,
      getViewportHeight: () => window.innerHeight,
      getTooltipSize: () => {
        return {
          width: this.root.offsetWidth,
          height: this.root.offsetHeight
        };
      },
      getAnchorBoundingRect: () => {
        return this.anchorElem ? this.anchorElem.getBoundingClientRect() : null;
      },
      getParentBoundingRect: () => {
        return this.root.parentElement?.getBoundingClientRect() ?? null;
      },
      getAnchorAttribute: (attr) => {
        return this.anchorElem ? this.anchorElem.getAttribute(attr) : null;
      },
      setAnchorAttribute: (attr, value) => {
        this.anchorElem?.setAttribute(attr, value);
      },
      isRTL: () => getComputedStyle(this.root).direction === 'rtl',
      anchorContainsElement: (element) => {
        return !!this.anchorElem?.contains(element);
      },
      tooltipContainsElement: (element) => {
        return this.root.contains(element);
      },
      focusAnchorElement: () => {
        this.anchorElem?.focus();
      },
      registerEventHandler: (evt, handler) => {
        if (this.root instanceof HTMLElement) {
          this.root.addEventListener(evt, handler);
        }
      },
      deregisterEventHandler: (evt, handler) => {
        if (this.root instanceof HTMLElement) {
          this.root.removeEventListener(evt, handler);
        }
      },
      registerAnchorEventHandler: (evt, handler) => {
        this.anchorElem?.addEventListener(evt, handler);
      },
      deregisterAnchorEventHandler: (evt, handler) => {
        this.anchorElem?.addEventListener(evt, handler);
      },
      registerDocumentEventHandler: (evt, handler) => {
        document.body.addEventListener(evt, handler);
      },
      deregisterDocumentEventHandler: (evt, handler) => {
        document.body.removeEventListener(evt, handler);
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(evt, handler);
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(evt, handler);
      },
      notifyHidden: () => {
        this.emit(events.HIDDEN, {});
      },
      getTooltipCaretBoundingRect: () => {
        const caret = this.root.querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`);
        if (!caret) {
          return null;
        }

        return caret.getBoundingClientRect();
      },
      setTooltipCaretStyle: (propertyName, value) => {
        const topCaret = this.root.querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_TOP}`);
        const bottomCaret = this.root.querySelector<HTMLElement>(
          `.${CssClasses.TOOLTIP_CARET_BOTTOM}`);

        if (!topCaret || !bottomCaret) {
          return;
        }

        topCaret.style.setProperty(propertyName, value);
        bottomCaret.style.setProperty(propertyName, value);
      },
      clearTooltipCaretStyles: () => {
        const topCaret = this.root.querySelector<HTMLElement>(`.${CssClasses.TOOLTIP_CARET_TOP}`);
        const bottomCaret = this.root.querySelector<HTMLElement>(`.${CssClasses.TOOLTIP_CARET_BOTTOM}`);

        if (!topCaret || !bottomCaret) {
          return;
        }
        topCaret.removeAttribute('style');
        bottomCaret.removeAttribute('style');
      },
    };

    return new MDCTooltipFoundation(adapter);
  }
}
