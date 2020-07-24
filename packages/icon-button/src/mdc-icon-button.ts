import { children, customElement, useView, inject, bindingMode, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MDCIconButtonToggleFoundation, MDCIconButtonToggleAdapter, MDCIconButtonToggleEventDetail, strings } from '@material/icon-button';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MdcIconButtonIcon } from './mdc-icon-button-icon/mdc-icon-button-icon';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-icon-button.html'))
@customElement('mdc-icon-button')
export class MdcIconButton extends MdcComponent<MDCIconButtonToggleFoundation> {
  @bindable.booleanAttr({ defaultBindingMode: bindingMode.twoWay })
  on: boolean;

  @children('mdc-icon-button-icon')
  icons?: MdcIconButtonIcon[];

  async attached() {
    await this.initialise();
    if (this.icons?.length) {
      this.foundation = this.getDefaultFoundation();
      this.foundation.init();
    }
    this.initialisedResolve();
    this.initialSyncWithDOM();
  }

  handleClick() {
    this.foundation?.handleClick();
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
