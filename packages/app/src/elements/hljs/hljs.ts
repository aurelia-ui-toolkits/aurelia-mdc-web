import { inject, customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { highlight } from 'highlightjs';

@inject(Element)
@useView(PLATFORM.moduleName('./hljs.html'))
@customElement('hljs')
export class Hljs {
  constructor(private root: HTMLElement) { }

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
    this.codeEl.innerHTML = highlight(this.language, this.source.innerText).value;
  }
}
