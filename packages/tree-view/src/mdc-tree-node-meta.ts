import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-tree-node-meta')
export class MdcTreeViewNOdeMeta {
  constructor(private root: HTMLElement) { }

  afterAttach() {
    this.root.classList.add('mdc-tree-node__meta');
  }
}
