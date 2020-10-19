import { customElement, children, customAttribute } from 'aurelia';

/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-list-group
 */
@customElement({
  name: 'mdc-list-group',
  template: '<template class="mdc-list-group"><slot></slot></template>'
})
export class MdcListGroup {
  @children({
    filter: el => ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes((el as HTMLElement).tagName)
  })
  // @children({ } 'h1,h2,h3,h4,h5,h6')
  headers: HTMLElement[];
  headersChanged() {
    this.headers.forEach(x => x.classList.add('mdc-list-group__subheader'));
  }
}

@customAttribute('mdc-list-group-subheader')
export class MdcListGroupSubheader {
  constructor(private root: HTMLElement) { }

  afterAttach() {
    this.root.classList.add('mdc-list-group__subheader');
  }
}
