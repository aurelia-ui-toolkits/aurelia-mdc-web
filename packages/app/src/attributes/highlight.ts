import { customAttribute, inject } from 'aurelia-framework';
import { highlightBlock } from 'highlightjs';
import 'highlightjs/styles/github.css';

@inject(Element)
@customAttribute('highlight')
export class Highlight {
  constructor(private element: HTMLElement) { }

  attached() {
    highlightBlock(this.element);
  }
}
