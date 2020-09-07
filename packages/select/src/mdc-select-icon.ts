import { customAttribute, inject } from 'aurelia-framework';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCSelectIconFoundation, MDCSelectIconAdapter } from '@material/select';

export const mdcIconStrings = {
  ATTRIBUTE: 'mdc-select-icon'
};

@inject(Element)
@customAttribute(mdcIconStrings.ATTRIBUTE)
export class MdcSelectIcon extends MdcComponent<MDCSelectIconFoundation> {
  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    this.root.classList.add('mdc-select__icon');
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCSelectIconAdapter = {
      getAttr: (attr) => this.root.getAttribute(attr),
      setAttr: (attr, value) => this.root.setAttribute(attr, value),
      removeAttr: (attr) => this.root.removeAttribute(attr),
      setContent: (content) => {
        this.root.textContent = content;
      },
      registerInteractionHandler: (evtType, handler) => this.listen(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.unlisten(evtType, handler),
      notifyIconAction: () => this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */),
    };
    return new MDCSelectIconFoundation(adapter);
  }
}

/** @hidden */
export interface IMdcSelectIconElement extends HTMLElement {
  au: {
    'mdc-select-icon': {
      viewModel: MdcSelectIcon;
    };
  };
}
