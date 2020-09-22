import { inlineView, customElement, children, customAttribute, inject } from 'aurelia-framework';

/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-list-group
 */
@inlineView('<template class="mdc-list-group"><slot></slot></template>')
@customElement('mdc-list-group')
export class MdcListGroup {
  @children('h1,h2,h3,h4,h5,h6')
  headers: HTMLElement[];
  headersChanged() {
    this.headers.forEach(x => x.classList.add('mdc-list-group__subheader'));
  }
}

@inject(Element)
@customAttribute('mdc-list-group-subheader')
export class MdcListGroupSubheader {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-list-group__subheader');
  }
}
