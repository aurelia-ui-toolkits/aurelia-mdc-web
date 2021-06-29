import { highlight } from 'highlight.js';
import { customElement, bindable, inject, } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

@inject(Element)
@customElement('hljs')
@processContent(defaultSlotProcessContent)
export class Hljs {
  source: HTMLDivElement;
  codeEl: HTMLElement;
  observer?: MutationObserver;

  @bindable
  language: string;

  attached() {
    this.observer = new MutationObserver(() => this.highlight());
    this.observer.observe(this.source, {
      characterData: true,
      childList: true,
      subtree: true
    });

    this.highlight();
  }

  detached() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  highlight() {
    if (this.source) {
      this.codeEl.innerHTML = highlight(this.language, this.source.innerText).value;
    }
  }
}
