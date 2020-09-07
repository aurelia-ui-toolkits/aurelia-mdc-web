import { NavigationInstruction, RouteConfig } from 'aurelia-router';
import { NavigationItem } from 'typedoc';

interface ICategoryItem {
  name: string;
  description: string;
}

declare module 'typedoc' {
  interface NavigationItem {
    name: string;
    signatures: {
      comment: NavigationItem['comment'];
      parameters: any[];
    }[];
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
      children: ICategoryItem[];
    }[];
    kindString: string;
    type: { name: string };
    getSignature: {
      type: { name: string };
    }[];
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
      const attributes = x.children?.filter(y => ['Property', 'Accessor'].includes(y.kindString) && y.comment?.shortText)
        .map(y => ({
          name: `${y.name}: ${y.kindString === 'Accessor' ? y.getSignature[0].type.name : y.type.name}`,
          description: y.comment.shortText
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      if (attributes?.length) {
        x.categories.push({ name: 'Attributes', children: attributes });
      }
      const methods = x.children?.filter(y => y.kindString === 'Method' && y.signatures[0].comment?.shortText)
        .map(y => ({
          name: `${y.name}(${(y.signatures[0].parameters ?? []).reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${c.name}: ${c.type.name}`, '')})`,
          description: y.signatures[0].comment.shortText
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      if (methods?.length) {
        x.categories.push({ name: 'Methods', children: methods });
      }
      const events = x.comment.tags.filter(t => t.tag === 'emits').map(y => ({ name: y.tag, description: y.text }));
      if (events.length) {
        x.categories.push({ name: 'Events', children: events });
      }
    });
  }
}
