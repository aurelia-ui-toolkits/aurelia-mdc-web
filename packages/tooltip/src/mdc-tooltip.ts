import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCTooltipFoundation, MDCTooltipAdapter, events, XPosition, YPosition, AnchorBoundaryType, attributes } from '@material/tooltip';
import { inject, customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * @selector mdc-tooltip
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-tooltip.html'))
@customElement('mdc-tooltip')
export class MdcTooltip extends MdcComponent<MDCTooltipFoundation> implements EventListenerObject {

  /** Sets the anchor element */
  @bindable
  anchorElem?: HTMLElement;

  @bindable.booleanAttr
  rich: boolean;

  @bindable.booleanAttr
  persistent: boolean;

  /** Sets the horizontal alignment of the tooltip */
  @bindable
  xPosition?: keyof typeof XPosition;
  async xPositionChanged() {
    if (this.xPosition !== undefined) {
      await this.initialised;
      this.foundation?.setTooltipPosition({ xPos: XPosition[this.xPosition] });
    }
  }

  /** Sets the vertical alignment of the tooltip */
  @bindable
  yPosition?: keyof typeof YPosition;
  async yPositionChanged() {
    if (this.yPosition !== undefined) {
      await this.initialised;
      this.foundation?.setTooltipPosition({ yPos: YPosition[this.yPosition] });
    }
  }

  /** Specifies whether the anchor element is bounded (element has an identifiable boundary such as a button) or unbounded (element does not have a visually declared boundary such as a text link).
   * Tooltips are placed closer to bounded anchor elements compared to unbounded anchor elements. If no type is specified, defaults to BOUNDED.
   **/
  @bindable
  boundaryType?: keyof typeof AnchorBoundaryType;
  async boundaryTypeChanged() {
    if (this.boundaryType !== undefined) {
      await this.initialised;
      this.foundation?.setAnchorBoundaryType(AnchorBoundaryType[this.boundaryType]);
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    if (this.persistent) {
      this.root.setAttribute(attributes.PERSISTENT, 'true');
    }
  }

  initialSyncWithDOM() {
    this.anchorElem?.addEventListener('blur', this);
    if (this.rich && this.persistent) {
      this.anchorElem?.addEventListener('click', this);
    } else {
      this.anchorElem?.addEventListener('mouseenter', this);
      // TODO(b/157075286): Listening for a 'focus' event is too broad.
      this.anchorElem?.addEventListener('focus', this);
      this.anchorElem?.addEventListener('mouseleave', this);
    }
  }

  destroy() {
    if (this.anchorElem) {
      this.anchorElem.removeEventListener('blur', this);
      if (this.rich && this.persistent) {
        this.anchorElem.removeEventListener('click', this);
      } else {
        this.anchorElem.removeEventListener('mouseenter', this);
        this.anchorElem.removeEventListener('focus', this);
        this.anchorElem.removeEventListener('mouseleave', this);
      }
    }
  }

  handleEvent(evt: Event): void {
    switch (evt.type) {
      case 'blur': this.handleBlur(evt as FocusEvent); break;
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

  handleBlur(evt: FocusEvent) {
    this.foundation?.handleAnchorBlur(evt);
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
      setStyleProperty: (propertyName, value) => {
        this.root.style.setProperty(propertyName, value);
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
    };

    return new MDCTooltipFoundation(adapter);
  }
}
