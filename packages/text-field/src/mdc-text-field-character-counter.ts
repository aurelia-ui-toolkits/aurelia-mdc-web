import { inject, inlineView, customElement } from 'aurelia-framework';
import { MDCTextFieldCharacterCounterFoundation, MDCTextFieldCharacterCounterAdapter, characterCountCssClasses } from '@material/textfield';
import { MdcComponent } from '@aurelia-mdc-web/base';

@inject(Element)
@inlineView(`<template class="${characterCountCssClasses.ROOT}"></template>`)
@customElement(characterCountCssClasses.ROOT)
export class MdcTextFieldCharacterCounter extends MdcComponent<MDCTextFieldCharacterCounterFoundation> {
  // Provided for access by MDCTextField component
  get foundationForTextField(): MDCTextFieldCharacterCounterFoundation {
    return this.foundation!;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTextFieldCharacterCounterAdapter = {
      setContent: (content) => {
        this.root.textContent = content;
      },
    };
    return new MDCTextFieldCharacterCounterFoundation(adapter);
  }
}

/** @hidden */
export interface IMdcTextFieldCharacterCounterElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcTextFieldCharacterCounter;
    };
  };
}
