import hljs from 'highlight.js';
import { customElement, bindable, inject, } from 'aurelia';
import template from './hljs.html?raw';

@inject(Element)
@customElement({ name: 'hljs', template })
export class Hljs {
  source: HTMLDivElement;
  codeEl: HTMLElement;
  observer?: MutationObserver;

  @bindable()
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
      this.codeEl.innerHTML = hljs.highlight(this.source.innerText, { language: this.language }).value;
    }
  }
}
