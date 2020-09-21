import { NavigationInstruction, RouteConfig } from 'aurelia-router';
import { NavigationItem } from 'typedoc';
import buttonApi from '../../../../button/doc/api.json';
import cardApi from '../../../../card/doc/api.json';
import checkboxApi from '../../../../checkbox/doc/api.json';
import chipsApi from '../../../../chips/doc/api.json';
import circularProgressApi from '../../../../circular-progress/doc/api.json';
import dataTableApi from '../../../../data-table/doc/api.json';
import dialogApi from '../../../../dialog/doc/api.json';
import drawerApi from '../../../../drawer/doc/api.json';
import elevationApi from '../../../../elevation/doc/api.json';
import expandableApi from '../../../../expandable/doc/api.json';
import fabApi from '../../../../fab/doc/api.json';
import formFieldApi from '../../../../form-field/doc/api.json';
import iconButtonApi from '../../../../icon-button/doc/api.json';
import imageListApi from '../../../../image-list/doc/api.json';

const apis: Record<string, unknown> = {
  'button': buttonApi,
  'card': cardApi,
  'checkbox': checkboxApi,
  'chips': chipsApi,
  'circular-progress': circularProgressApi,
  'data-table': dataTableApi,
  'dialog': dialogApi,
  'drawer': drawerApi,
  'elevation': elevationApi,
  'expandable': expandableApi,
  'fab': fabApi,
  'form-field': formFieldApi,
  'icon-button': iconButtonApi,
  'image-list': imageListApi
};

interface ICategoryItem {
  name: string;
  type?: string;
  description?: string;
}

interface ITag {
  tag: string;
  text: string;
}

declare module 'typedoc' {
  interface NavigationItem {
    name: string;
    signatures: {
      comment: NavigationItem['comment'];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parameters: any[];
    }[];
    comment?: {
      shortText: string;
      tags?: ITag[];
      selectors?: ITag[];
    };
    categories?: {
      name: string;
      children: ICategoryItem[];
      hasType?: boolean;
    }[];
    kindString: string;
    type: {
      type: string;
      name: string;
      types: { type: string; name: string; value: string }[];
      elementType: { name: string };
    };
    getSignature: {
      type: NavigationItem['type'];
    }[];
  }
}

export class ApiViewer {
  classesApi?: NavigationItem[];

  activate(_params: unknown, _routeConfig: RouteConfig, instruction: NavigationInstruction) {
    const api = (instruction.parentInstruction.config.name !== undefined ? apis[instruction.parentInstruction.config.name] : {}) as NavigationItem;
    this.classesApi = api.children?.reduce((p, c) => {
      const elementsAndAttributes = c.children?.filter(x => {
        if (!x.comment) {
          return false;
        }
        x.comment.selectors = x.comment?.tags?.filter(y => y.tag === 'selector');
        return !!x.comment;
      });
      p.push(...elementsAndAttributes ?? []);
      return p;
    }, [] as NavigationItem[]);
    this.classesApi?.forEach(x => {
      x.categories = [];
      const attributes = x.children?.filter(y => ['Property', 'Accessor'].includes(y.kindString) && y.comment?.shortText)
        .map(y => {
          return {
            name: y.name,
            type: y.kindString === 'Accessor' ? this.getType(y.getSignature[0].type) : this.getType(y.type),
            description: y.comment?.shortText
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
      if (attributes?.length) {
        x.categories.push({ name: 'Attributes', children: attributes, hasType: true });
      }
      const methods = x.children?.filter(y => y.kindString === 'Method' && y.signatures[0].comment?.shortText)
        .map(y => ({
          name: `${y.name}(${(y.signatures[0].parameters ?? []).reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${c.name}: ${this.getType(c.type)}`, '')})`,
          description: y.signatures[0].comment?.shortText
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      if (methods?.length) {
        x.categories.push({ name: 'Methods', children: methods });
      }
      const events = x.comment?.tags?.filter(t => t.tag === 'emits').map(y => ({ name: y.text.split('|')[0], description: y.text.split('|')[1] }));
      if (events?.length) {
        x.categories.push({ name: 'Events', children: events });
      }
    });
  }

  getType(t: NavigationItem['type']): string {
    switch (t.type) {
      case 'union': return t.types.reduce((p, c, i) => `${p}${i > 0 ? ' | ' : ''}${c.name ?? `'${c.value}'`}`, '');
      case 'array': return `${t.elementType.name}[]`;
      default: return t.name;
    }

  }
}
