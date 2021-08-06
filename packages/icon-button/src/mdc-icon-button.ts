import { customElement, inject, BindingMode, bindable } from 'aurelia';
import { MDCIconButtonToggleFoundation, MDCIconButtonToggleAdapter, MDCIconButtonToggleEventDetail, strings } from '@material/icon-button';
import { MdcComponent, booleanAttr, defaultSlotProcessContent } from '@aurelia-mdc-web/base';
import { processContent } from '@aurelia/runtime-html';

/**
 * @selector button[mdc-icon-button]
 * @selector a[mdc-icon-button]
 * @selector mdc-icon-button
 */
@inject(Element)
@customElement('mdc-icon-button')
@processContent(defaultSlotProcessContent)
export class MdcIconButton extends MdcComponent<MDCIconButtonToggleFoundation> {
  /** Sets the toggle state to the provided value */
  @bindable({ set: booleanAttr, mode: BindingMode.twoWay })
  on: boolean;

  /** Optional. Set a Material icon as a non-toggle icon. */
  @bindable
  icon: string;

  // this is necessary for the route-href to work
  @bindable
  href: string;
  hrefChanged() {
    if (this.href) {
      this.root.setAttribute('href', this.href);
    } else {
      this.root.removeAttribute('href');
    }
  }

  /**
   * Set the component touch target to 48 x 48 px
   */
  @bindable({ set: booleanAttr, mode: BindingMode.twoWay })
  touch: boolean;

  attached() {
    this.hrefChanged();
    if (this.root.querySelector('mdc-icon-button-icon')) {
      this.foundation = this.getDefaultFoundation();
      this.foundation.init();
    }
  }

  handleClick() {
    this.foundation?.handleClick();
    return true;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCIconButtonToggleAdapter = {
      addClass: (className) => this.root.classList.add(className),
      hasClass: (className) => this.root.classList.contains(className),
      notifyChange: (evtData) => {
        this.emit<MDCIconButtonToggleEventDetail>(strings.CHANGE_EVENT, evtData);
        this.on = evtData.isOn;
      },
      removeClass: (className) => this.root.classList.remove(className),
      getAttr: (attrName) => this.root.getAttribute(attrName),
      setAttr: (attrName, attrValue) => this.root.setAttribute(attrName, attrValue),
    };
    return new MDCIconButtonToggleFoundation(adapter);
  }

}
