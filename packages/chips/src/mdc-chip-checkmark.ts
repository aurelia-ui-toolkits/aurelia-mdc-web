import { customElement, inlineView, inject, View } from 'aurelia-framework';

@inject(Element)
@inlineView(`<template class="mdc-chip__checkmark">
<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30" focusable="false">
<path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
</svg>
</template>`)
@customElement('mdc-chip-checkmark')
export class MdcChipCheckmark {
  constructor(public root: HTMLElement) {
  }
}

/** @hidden */
export interface IMdcChipCheckmarkElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcChipCheckmark;
    };
  };
}
