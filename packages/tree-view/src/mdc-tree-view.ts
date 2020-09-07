import {
  customElement, bindable, useView, PLATFORM, processContent, ViewCompiler, ViewResources, inject,
  Optional, Container, ViewFactory, TaskQueue
} from 'aurelia-framework';
import { INode } from './i-node';

let id = 0;
const templateLookup: Record<string, string> = {};
const getNextNodeTemplateId = () => ++id;
const NODE_SELECTED_EVENT = 'mdctree:node-selected';

@inject(Element, TaskQueue, Container)
@customElement('mdc-tree-view')
@useView(PLATFORM.moduleName('./mdc-tree-view.html'))
@processContent(MdcTreeView.processContent)
export class MdcTreeView {

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element) {
    const treeNode = element.querySelector('mdc-tree-node');
    if (treeNode) {
      const nodeTemplateId = getNextNodeTemplateId();
      element.setAttribute('data-template-id', nodeTemplateId.toString());
      templateLookup[nodeTemplateId] = treeNode.innerHTML;
    }
    element.innerHTML = '';
    return false;
  }

  /**
   * @param element the host element of a <mdc-tree-view/>
   * @param container the container associated with a <mdc-tree-view/>
   */
  private static getNodeFactory(element: Element, container: Container): ViewFactory {
    const parent = container.parent ? container.parent.get(Optional.of(MdcTreeView)) : null;
    const isRoot = !parent;
    // a root mdc-tree view means a consumer defined one
    // this potentiall contains the template for the tree node
    if (isRoot) {
      const nodeTemplateId = element.getAttribute('data-template-id');
      if (nodeTemplateId && templateLookup[nodeTemplateId]) {
        const nodeTemplate = templateLookup[nodeTemplateId];
        const nodeViewFactory = container.get(ViewCompiler).compile(`<template>${nodeTemplate}</template>`, container.get(ViewResources));
        return nodeViewFactory;
      } else {
        // create a default <mdc-tree-node/> factory
        // eslint-disable-next-line no-template-curly-in-string
        return container.get(ViewCompiler).compile('<template>${$node}</template>', container.get(ViewResources));
      }
    } else {
      // if it's not a root <mdc-tree-view/>
      // assume that the parent has already built the node factory and simply get it from there
      return parent.nodeViewFactory as ViewFactory;
    }
  }

  constructor(private element: HTMLElement, private taskQueue: TaskQueue, container: Container) {
    this.nodeViewFactory = MdcTreeView.getNodeFactory(element, container);
  }

  nodeViewFactory: ViewFactory;
  selectedNode: INode;

  @bindable
  nodes: INode[];

  // this is populated by the HTML template
  treeViews: MdcTreeView[] = [];

  @bindable
  rootBindingContext: Record<string, unknown>;

  bind(bindingContext: Record<string, unknown>) {
    this.rootBindingContext = this.rootBindingContext ?? bindingContext;
  }

  toggleExpanded(n: INode, e: Event): boolean {
    n.expanded = !n.expanded;
    e.stopPropagation();
    return false;
  }

  nodeClicked(n: INode) {
    if (this.selectedNode) {
      this.selectedNode.selected = false;
    }
    n.selected = true;
    this.selectedNode = n;
    this.element.dispatchEvent(new CustomEvent(NODE_SELECTED_EVENT,
      { detail: { node: n }, bubbles: true })
    );
    return true;
  }

  childNodeSelected(n: INode) {
    if (this.selectedNode && this.selectedNode !== n) {
      this.selectedNode.selected = false;
    }
    this.selectedNode = n;
  }

  findPath(nodes: INode[], predicate: (node: INode) => boolean): number[] {
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

  expandPath(path: number[]) {
    if (path.length === 1) {
      this.nodeClicked(this.nodes[path[0]]);
      this.element.querySelectorAll('.mdc-tree-view__node')[path[0]].scrollIntoView();
    } else {
      this.nodes[path[0]].expanded = true;
      // let Aurelia populate treeViews by queueing the task
      // todo: flatten the data source via a data normalization step first
      // as this technique requires many round of queueTask if the node selected is deep
      this.taskQueue.queueTask(() => {
        this.treeViews[path[0]].expandPath(path.slice(1));
      });
    }
  }

  find(predicate: (node: INode) => boolean) {
    // to avoid rendering the whole tree finding a node is a 2-step process
    // firstly, find the path - nodes which need to be expanded to display the target node
    const path = this.findPath(this.nodes, predicate);
    if (path.length) {
      // secondly, expand the path
      this.expandPath(path);
    }
  }

  dispatchEvent(type: string, node: INode) {
    this.element.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { node } }));
  }
}

/** @hidden */
export interface IMdcTreeElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcTreeView;
    };
  };
}
