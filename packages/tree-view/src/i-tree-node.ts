import { MdcTreeView } from './mdc-tree-view';

export interface ITreeNode {
  children?: ITreeNode[];
  expanded?: boolean;
  selected?: boolean;
  childTreeViewPromise?: Promise<MdcTreeView>;
}
