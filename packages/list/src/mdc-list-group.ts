import { customElement, customAttribute, inject } from 'aurelia';

/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-list-group
 */
@inject(Element)
@customElement({
  name: 'mdc-list-group',
  template: '<template class="mdc-list-group"></template>'
})
export class MdcListGroup {
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
    this.root.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(x => x.classList.add('mdc-list-group__subheader'));
  }
}

@customAttribute('mdc-list-group-subheader')
export class MdcListGroupSubheader {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-list-group__subheader');
  }
}
