import { customElement, customAttribute, slotted, inject } from 'aurelia';

/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-deprecated-list-group
 */
@customElement({
  name: 'mdc-deprecated-list-group',
  template: '<template class="mdc-deprecated-list-group"><au-slot></au-slot></template>'
})
export class MdcDeprecatedListGroup {
  @slotted({ query: 'h1,h2,h3,h4,h5,h6' })
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
