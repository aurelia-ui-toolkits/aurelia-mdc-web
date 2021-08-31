import { inlineView, customElement, children, customAttribute, inject } from 'aurelia-framework';

/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-deprecated-list-group
 */
@inlineView('<template class="mdc-deprecated-list-group"><slot></slot></template>')
@customElement('mdc-deprecated-list-group')
export class MdcDeprecatedListGroup {
  @children('h1,h2,h3,h4,h5,h6')
  headers: HTMLElement[];
  headersChanged() {
    this.headers.forEach(x => x.classList.add('mdc-deprecated-list-group__subheader'));
  }
}

@inject(Element)
@customAttribute('mdc-deprecated-list-group-subheader')
export class MdcDeprecatedListGroupSubheader {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-deprecated-list-group__subheader');
  }
}
