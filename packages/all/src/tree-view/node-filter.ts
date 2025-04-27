import { valueConverter } from 'aurelia';
import { ITreeNode } from './i-tree-node';

@valueConverter('nodeFilter')
export class NodeFilterValueConverter {
  toView(nodes: ITreeNode[], filter: (n: ITreeNode) => boolean) {
    if (!filter) {
      return nodes;
    }
    return nodes?.filter(x => filter(x));
  }
}
