import { ITreeNode } from './i-tree-node';

export class NodeFilterValueConverter {
  toView(nodes: ITreeNode[], filter: (n: ITreeNode) => boolean) {
    if (!filter) {
      return nodes;
    }
    return nodes?.filter(x => filter(x));
  }
}
