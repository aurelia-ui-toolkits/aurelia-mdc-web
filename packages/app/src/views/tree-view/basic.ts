import { MdcTreeView } from '@aurelia-mdc-web/tree-view';

export class Basic {
  treeView: MdcTreeView;

  public treeViewNodes = [
    { name: 'item1', children: [{ name: 'child11', children: [{ name: 'child111' }, { name: 'child112' }] }, { name: 'child12' }] },
    { name: 'item2', children: [{ name: 'child21' }, { name: 'child22' }] }
  ];

  async findChild() {
    await this.treeView.find(n => (n as { name: string }).name === 'child111');
  }
}
