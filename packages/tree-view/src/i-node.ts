import { MdcTreeView } from './mdc-tree-view';

export interface INode {
  children?: INode[];
  expanded?: boolean;
  selected?: boolean;
  childTreeViewPromise?: Promise<MdcTreeView>;
}
