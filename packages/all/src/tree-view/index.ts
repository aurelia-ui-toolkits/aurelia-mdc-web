import { IContainer } from '@aurelia/kernel';
import { MdcTreeView } from './mdc-tree-view';
import { MdcTreeViewNodeMeta } from './mdc-tree-node-meta';
import { MdcTreeNode } from './mdc-tree-node';
import { IconButtonConfiguration } from '@aurelia-mdc-web/icon-button';
import { NodeFilterValueConverter } from './node-filter';

export { MdcTreeView, MdcTreeViewNodeMeta, MdcTreeNode };

let registered = false;

export const TreeViewConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(
        IconButtonConfiguration,
        MdcTreeView,
        MdcTreeViewNodeMeta,
        MdcTreeNode,
        NodeFilterValueConverter
      );
    }
  }
};
