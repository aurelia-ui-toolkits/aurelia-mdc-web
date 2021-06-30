import { customAttribute, inject } from 'aurelia';

@inject(Element)
@customAttribute('mdc-tree-node-meta')
export class MdcTreeViewNodeMeta {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-tree-node__meta');
  }
}
