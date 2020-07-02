import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCTextFieldIconFoundation, MDCTextFieldIconAdapter, iconCssClasses } from '@material/textfield';
import { inject, customAttribute } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-text-field-icon')
export class MdcTextFieldIcon extends MdcComponent<MDCTextFieldIconFoundation> {
  async initialise() {
    this.root.classList.add(iconCssClasses.ROOT);
    if (this.root.hasAttribute('leading')) {
      this.root.classList.add(`${iconCssClasses.ROOT}--leading`);
    }
    if (this.root.hasAttribute('trailing')) {
      this.root.classList.add(`${iconCssClasses.ROOT}--trailing`);
    }
  }

  // Provided for access by MDCTextField component
  get foundationForTextField(): MDCTextFieldIconFoundation {
    return this.foundation;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTextFieldIconAdapter = {
      getAttr: (attr) => this.root.getAttribute(attr),
      setAttr: (attr, value) => this.root.setAttribute(attr, value),
      removeAttr: (attr) => this.root.removeAttribute(attr),
      setContent: (content) => {
        this.root.textContent = content;
      },
      registerInteractionHandler: (evtType, handler) => this.listen(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.unlisten(evtType, handler),
      notifyIconAction: () => this.emit(
        MDCTextFieldIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */),
    };
    return new MDCTextFieldIconFoundation(adapter);
  }

}
