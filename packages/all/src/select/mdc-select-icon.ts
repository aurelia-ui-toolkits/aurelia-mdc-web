import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCSelectIconFoundation, MDCSelectIconAdapter, strings } from '@material/select';
import { inject, customAttribute } from 'aurelia';

export const mdcIconStrings = {
  ATTRIBUTE: 'mdc-select-icon'
};

@inject(Element)
@customAttribute(mdcIconStrings.ATTRIBUTE)
export class MdcSelectIcon extends MdcComponent<MDCSelectIconFoundation> {
  attaching() {
    this.root.classList.add(strings.LEADING_ICON_SELECTOR.replace('.', ''));
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
  $au: {
    'au:resource:custom-attribute:mdc-select-icon': {
      viewModel: MdcSelectIcon;
    };
  };
}
