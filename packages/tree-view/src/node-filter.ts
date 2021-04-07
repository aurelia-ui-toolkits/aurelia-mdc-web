import { INode } from './i-node';

export class NodeFilterValueConverter {
  toView(nodes: INode[], filter: (n: INode) => boolean) {
    if (!filter) {
      return nodes;
    }
    return nodes?.filter(x => filter(x));
  }
}
