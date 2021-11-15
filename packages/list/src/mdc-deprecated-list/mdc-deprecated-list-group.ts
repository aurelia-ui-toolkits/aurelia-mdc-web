import { customElement, customAttribute, inject } from 'aurelia';

/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-deprecated-list-group
 */
@inject(Element)
@customElement({
  name: 'mdc-deprecated-list-group',
  template: '<template class="mdc-deprecated-list-group"></template>'
})
export class MdcDeprecatedListGroup {
  constructor(private root: HTMLElement) { }

  // TODO: this is not working yet
  // @children({
  //   filter: el => ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes((el as HTMLElement).tagName)
  // })
  // headers: HTMLElement[];
  // headersChanged() {
  //   this.headers.forEach(x => x.classList.add('mdc-list-group__subheader'));
  // }

  attached() {
    this.root.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(x => x.classList.add('mdc-deprecated-list-group__subheader'));
  }
}

@customAttribute('mdc-deprecated-list-group-subheader')
export class MdcDeprecatedListGroupSubheader {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-deprecated-list-group__subheader');
  }
}
