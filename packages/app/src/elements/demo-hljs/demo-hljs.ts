import { highlight, highlightBlock } from 'highlightjs';
import { customElement, bindable, inject } from 'aurelia';

@inject(Element)
@customElement('demo-hljs')
export class DemoHljs {
  constructor(private root: HTMLElement) { }

  source: HTMLDivElement;
  codeEl: HTMLElement;
  observer?: MutationObserver;

  @bindable
  language: string;

  afterAttach() {
    // this.observer = new MutationObserver(() => this.highlight());
    // this.observer.observe(this.root, {
    //   characterData: true,
    //   childList: true,
    //   subtree: true
    // });

    this.highlight();
  }

  detached() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  highlight() {
    highlightBlock(this.codeEl);
    // this.codeEl.innerHTML = highlight(this.language, this.source.innerText).value;
  }
}
