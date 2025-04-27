import { NavigationItem } from 'typedoc';
import bannerApi from '../../../../all/src/banner/doc/api.json';
import buttonApi from '../../../../all/src/button/doc/api.json';
import chipsApi from '../../../../all/src/chips/doc/api.json';
import cardApi from '../../../../all/src/card/doc/api.json';
import checkboxApi from '../../../../all/src/checkbox/doc/api.json';
import circularProgressApi from '../../../../all/src/circular-progress/doc/api.json';
import dataTableApi from '../../../../all/src/data-table/doc/api.json';
import dialogApi from '../../../../all/src/dialog/doc/api.json';
import drawerApi from '../../../../all/src/drawer/doc/api.json';
import elevationApi from '../../../../all/src/elevation/doc/api.json';
import expandableApi from '../../../../all/src/expandable/doc/api.json';
import fabApi from '../../../../all/src/fab/doc/api.json';
import formFieldApi from '../../../../all/src/form-field/doc/api.json';
import iconButtonApi from '../../../../all/src/icon-button/doc/api.json';
import imageListApi from '../../../../all/src/image-list/doc/api.json';
import layoutGridApi from '../../../../all/src/layout-grid/doc/api.json';
import linearProgressApi from '../../../../all/src/linear-progress/doc/api.json';
import listApi from '../../../../all/src/list/doc/api.json';
import lookupApi from '../../../../all/src/lookup/doc/api.json';
import radioApi from '../../../../all/src/radio/doc/api.json';
import { RoutingInstruction, IRouter, route } from '@aurelia/router';

const apis: Record<string, unknown> = {
  'banner-page': bannerApi,
  'button-page': buttonApi,
  'chips': chipsApi,
  'card': cardApi,
  'checkbox': checkboxApi,
  'circular-progress': circularProgressApi,
  'data-table': dataTableApi,
  'dialog-page': dialogApi,
  'drawer': drawerApi,
  'elevation': elevationApi,
  'expandable': expandableApi,
  'fab': fabApi,
  'form-field': formFieldApi,
  'icon-button': iconButtonApi,
  'image-list': imageListApi,
  'layout-grid': layoutGridApi,
  'linear-progress': linearProgressApi,
  'list': listApi,
  'lookup': lookupApi,
  'radio': radioApi
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

interface IType {
  type: string;
  name: string;
  value: string;
  types: IType[];
  elementType: { name: string };
  declaration: { signatures: ISignature[] };
  typeArguments: IType[];
  target: { queryType: { name: string } };
}

interface IParameter {
  name: string;
  type: IType;
}

interface ISignature {
  comment: NavigationItem['comment'];
  parameters: IParameter[];
  type: IType;
}

declare module 'typedoc' {
  interface NavigationItem {
    name: string;
    signatures: ISignature[];
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
    type: IType;
    getSignature: {
      type: IType;
    }[];
    setSignature: {
      type: IType;
    }[];
    children?: NavigationItem[];
  }
}

@route({ path: 'api' })
export class ApiViewer {
  classesApi?: NavigationItem[];

  loading(parameters: Record<string, unknown>, ri: RoutingInstruction) {
    const componentName = ri.endpoint.scope?.routingInstruction?.component.name;
    if (!componentName) {
      return;
    }
    const api = apis[componentName ?? ''] as NavigationItem;
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
            type: y.kindString === 'Accessor' ? this.getType((y.getSignature ?? y.setSignature)[0].type) : this.getType(y.type),
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

  getType(t: IType): string {
    switch (t.type) {
      case 'union': return t.types.reduce((p, c, i) => `${p}${i > 0 ? ' | ' : ''}${this.getType(c)}`, '');
      case 'array': return `${t.elementType.name}[]`;
      case 'intrinsic': return t.name;
      case 'literal': return `'${t.value}'`;
      case 'stringLiteral': return `'${t.value}'`;
      case 'reflection': {
        if (!t['declaration'].signatures) {
          return '';
        }
        const signature = t['declaration'].signatures[0];
        return `(${(signature.parameters ?? []).reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${c.name}: ${this.getType(c.type)}`, '')}) => ${this.getType(signature.type)}`;
      }
      case 'reference':
        if (t.typeArguments && t.name !== 'Constructable') {
          return `${t.name}<${t.typeArguments.reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${this.getType(c)}`, '')}>`;
        } else {
          return t.name;
        }
      case 'typeOperator': return t.target.queryType.name;
      default: return t.name;
    }

  }
}
