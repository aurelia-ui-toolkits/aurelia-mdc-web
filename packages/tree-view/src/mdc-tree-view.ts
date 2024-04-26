import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCFoundation } from '@material/base';
import { customElement, bindable, inject, ViewFactory, INode } from 'aurelia';
import { ITreeNode } from './i-tree-node';
import { processContent } from '@aurelia/runtime-html';
import template from './mdc-tree-view.html';

let id = 0;
const templateLookup: Record<string, string> = {};
const getNextNodeTemplateId = () => ++id;
const NODE_SELECTED_EVENT = 'mdctree:node-selected';

export class MDCTreeViewFoundation extends MDCFoundation { }

@inject(Element)
@customElement({ name: 'mdc-tree-view', template })
@processContent(function processContent(node: INode) {
  const element = node as Element;
  const treeNode = element.querySelector('mdc-tree-node');
  if (treeNode) {
    const nodeTemplateId = getNextNodeTemplateId();
    element.setAttribute('data-template-id', nodeTemplateId.toString());
    templateLookup[nodeTemplateId] = treeNode.innerHTML;
  }
  element.innerHTML = '';
  return false;
}
)
export class MdcTreeView extends MdcComponent<MDCTreeViewFoundation> {
  getDefaultFoundation(): MDCTreeViewFoundation {
    return new MDCTreeViewFoundation();
  }

  constructor(root: HTMLElement) {
    super(root);
    const templateId = root.getAttribute('data-template-id');
    if (templateId !== null) {
      this.nodeTemplate = templateLookup[templateId];
    }
  }

  nodeViewFactory: ViewFactory;
  selectedNode?: ITreeNode;

  @bindable
  nodeTemplate: string;

  @bindable
  nodes: ITreeNode[];

  onTest: boolean[] = [];

  /**
   * Allows for filtering tree nodes
   */
  @bindable
  filter: (n: ITreeNode) => boolean = () => true;

  @bindable
  rootBindingContext: Record<string, unknown>;

  bind(bindingContext: Record<string, unknown>) {
    this.rootBindingContext = this.rootBindingContext ?? bindingContext;
  }

  toggleExpanded(n: ITreeNode, e: Event): boolean {
    n.expanded = !n.expanded;
    e.stopPropagation();
    return false;
  }

  nodeClicked(n?: ITreeNode) {
    if (this.selectedNode) {
      this.selectedNode.selected = false;
    }
    if (n) {
      n.selected = true;
    }
    this.selectedNode = n;
    this.root.dispatchEvent(new CustomEvent(NODE_SELECTED_EVENT,
      { detail: { node: n }, bubbles: true })
    );
    return true;
  }

  childNodeSelected(n: ITreeNode) {
    if (this.selectedNode && this.selectedNode !== n) {
      this.selectedNode.selected = false;
    }
    this.selectedNode = n;
  }

  findPath<T extends ITreeNode>(nodes: T[], predicate: (node: T) => boolean): number[] {
    const path: number[] = [];
    for (let i = 0; i < nodes.length; ++i) {
      if (predicate(nodes[i])) {
        return [i];
      }
      if (!nodes[i].children) {
        continue;
      }
      const childPath = this.findPath(nodes[i].children!, predicate);
      if (childPath.length) {
        return [i, ...childPath];
      }
    }
    return path;
  }

  async expandPath(path: number[]) {
    const filteredNodes = this.nodes.filter(x => this.filter(x));
    if (path.length === 1) {
      this.nodeClicked(filteredNodes[path[0]]);
      this.root.querySelectorAll('.mdc-tree-view__node')[path[0]].scrollIntoView();
    } else {
      filteredNodes[path[0]].expanded = true;
      // child tree views are hidden with 'if.bind'
      // promises are created by a helper element `mdc-promisify-reference`
      // this lets dependent code to wait till a view model reference is assigned
      await this.initialised;
      const childTreeView = await (filteredNodes[path[0]].childTreeViewPromise);
      await childTreeView?.expandPath(path.slice(1));
    }
  }

  async find<T extends ITreeNode>(predicate: (node: T) => boolean) {
    // to avoid rendering the whole tree finding a node is a 2-step process
    // firstly, find the path - nodes which need to be expanded to display the target node
    const filteredNodes = this.nodes.filter(x => this.filter(x));
    const path = this.findPath(filteredNodes, predicate);
    if (path.length) {
      // secondly, expand the path
      await this.expandPath(path);
    }
  }

  dispatchEvent(type: string, node: ITreeNode) {
    this.root.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { node } }));
  }
}

/** @hidden */
export interface IMdcTreeElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcTreeView;
    };
  };
}
