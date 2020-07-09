import { inlineView, customElement, children } from 'aurelia-framework';

@inlineView('<template class="mdc-list-group"><slot></slot></template>')
@customElement('mdc-list-group')
export class MdcListGroup {
  @children('h1,h2,h3,h4,h5,h6')
  headers: HTMLElement[];
  headersChanged() {
    this.headers.forEach(x => x.classList.add('mdc-list-group__subheader'));
  }
}
