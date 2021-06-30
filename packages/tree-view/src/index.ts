import { IContainer } from '@aurelia/kernel';
import { MdcTreeView } from './mdc-tree-view';
import { MdcTreeViewNodeMeta } from './mdc-tree-node-meta';
import { MdcTreeNode } from './mdc-tree-node';
import { IconButtonConfiguration } from '@aurelia-mdc-web/icon-button';

export { MdcTreeView, MdcTreeViewNodeMeta, MdcTreeNode };

export const TreeViewConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(
      IconButtonConfiguration,
      MdcTreeView,
      MdcTreeViewNodeMeta,
      MdcTreeNode
    );
  }
};
