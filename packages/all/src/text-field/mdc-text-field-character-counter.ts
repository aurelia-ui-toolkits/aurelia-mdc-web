import { inject, customElement } from 'aurelia';
import { MDCTextFieldCharacterCounterFoundation, MDCTextFieldCharacterCounterAdapter, characterCountCssClasses } from '@material/textfield';
import { MdcComponent } from '../base';

@inject(Element)
@customElement({ name: 'mdc-text-field-character-counter', template: `<template class="${characterCountCssClasses.ROOT}"></template>` })
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
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcTextFieldCharacterCounter;
    };
  };
}
