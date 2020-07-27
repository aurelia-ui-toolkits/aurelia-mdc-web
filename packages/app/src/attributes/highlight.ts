import { customAttribute, inject } from 'aurelia-framework';
import { highlight } from 'highlightjs';
// eslint-disable-next-line import/no-unassigned-import
import 'highlightjs/styles/github.css';

@inject(Element)
@customAttribute('highlight')
export class Highlight {
  constructor(private element: HTMLElement) { }

  value: { code: string; language: string };
  valueChanged() {
    const r = highlight(this.value.language, this.value.code);
    this.element.innerHTML = r.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  bind() { }

  attached() {
    this.element.classList.add('hljs');
    this.valueChanged();
  }
}
