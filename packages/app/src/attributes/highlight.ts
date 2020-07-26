import { customAttribute, inject } from 'aurelia-framework';
import { highlightAuto } from 'highlightjs';
// eslint-disable-next-line import/no-unassigned-import
import 'highlightjs/styles/github.css';

@inject(Element)
@customAttribute('highlight')
export class Highlight {
  constructor(private element: HTMLElement) { }

  value: string;
  valueChanged() {
    const r = highlightAuto(this.value);
    this.element.innerHTML = r.value;
  }

  bind() { }

  attached() {
    this.element.classList.add('hljs');
    this.valueChanged();
  }
}
