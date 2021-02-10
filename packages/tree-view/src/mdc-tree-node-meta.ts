import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-tree-node-meta')
export class MdcTreeViewNOdeMeta {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-tree-node__meta');
  }
}
