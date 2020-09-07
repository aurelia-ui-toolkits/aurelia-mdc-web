import { NavigationInstruction, RouteConfig } from 'aurelia-router';
import { NavigationItem } from 'typedoc';

declare module 'typedoc' {
  interface NavigationItem {
    comment: {
      shortText: string;
      tags: {
        tag: string;
        text: string;
      }[];
      selectors: NavigationItem['comment']['tags'];
    };
    categories: {
      name: string;
      children: NavigationItem['children'];
    }[];
    kindString: string;
  }
}

export class ApiViewer {
  classesApi?: NavigationItem[];

  async activate(_params: unknown, _routeConfig: RouteConfig, instruction: NavigationInstruction) {
    const api = await import(
      /* webpackExclude: /node_modules\/.*api\.json$/ */
      `../../../../${instruction.parentInstruction.config.name}/doc/api.json`
    ) as NavigationItem;
    this.classesApi = api.children?.reduce((p, c) => {
      const elementsAndAttributes = c.children?.filter(x => {
        if (!x.comment) {
          return false;
        }
        x.comment.selectors = x.comment?.tags.filter(y => y.tag === 'selector');
        return x.comment?.selectors.length;
      });
      p.push(...elementsAndAttributes ?? []);
      return p;
    }, [] as NavigationItem[]);
    this.classesApi?.forEach(x => {
      x.categories = [];
      const attributes = x.children?.filter(y => y.kindString === 'Property' && y.comment?.shortText);
      if (attributes?.length) {
        x.categories.push({ name: 'Attributes', children: attributes });
      }
      const methods = x.children?.filter(y => y.kindString === 'Method' && y.comment?.shortText);
      if (methods?.length) {
        x.categories.push({ name: 'Methods', children: methods });
      }
    });
  }
}
