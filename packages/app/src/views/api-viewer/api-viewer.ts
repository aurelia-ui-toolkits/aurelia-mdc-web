// import { NavigationElement, ProjectReflection, DeclarationReflection, ReflectionKind } from 'typedoc';

import {
  ConsoleLogger,
  DeclarationReflection,
  Deserializer,
  FileRegistry,
  ReflectionKind,
  setTranslations,
} from "typedoc/browser";
import translations from "typedoc/browser/en";

import apiJson from '../../../../all/doc/api.json' with { type: "json" };

const logger = new ConsoleLogger();
const deserializer = new Deserializer(logger);
const project = deserializer.reviveProject("API Docs", apiJson as any, {
  projectRoot: "/",
  registry: new FileRegistry(),
});


import { RoutingInstruction, IRouter, route } from '@aurelia/router';

// interface ICategoryItem {
//   name: string;
//   type?: string;
//   description?: string;
// }

// interface ITag {
//   tag: string;
//   text: string;
// }

// interface IType {
//   type: string;
//   name: string;
//   value?: string;
//   types?: IType[];
//   elementType?: { name: string };
//   declaration?: { signatures: ISignature[] };
//   typeArguments?: IType[];
//   target?: { queryType?: { name: string } };
// }

// interface IParameter {
//   name: string;
//   type?: IType;
// }

// interface ISignature {
//   comment?: NavigationItem['comment'];
//   parameters: IParameter[];
//   type: IType;
// }

// declare module 'typedoc' {
//   interface NavigationItem {
//     name: string;
//     signatures?: ISignature[];
//     comment?: {
//       shortText: string;
//       blockTags?: ITag[];
//       selectors?: ITag[];
//     };
//     categories?: {
//       name: string;
//       children: ICategoryItem[];
//       hasType?: boolean;
//     }[];
//     kindString?: string;
//     type?: IType;
//     getSignature?: {
//       type: IType;
//     }[];
//     setSignature?: {
//       type: IType;
//     }[];
//     sources?: { fileName: string }[];
//     children?: NavigationItem[];
//   }
// }

@route({ path: 'api' })
export class ApiViewer {
  classesApi?: DeclarationReflection[];

  loading(parameters: Record<string, unknown>, ri: RoutingInstruction) {
    const componentName = ri.endpoint.scope?.routingInstruction?.component.name?.replace('-page', '');
    if (!componentName) {
      return;
    }



    this.classesApi = project.children?.filter(x =>
      x.sources?.find(s => s.fileName.startsWith(`packages/all/src/${componentName}/`))
      && x.comment
      && x.comment?.blockTags?.filter(y => y.tag === '@selector'));

    // this.classesApi?.forEach(x => {
    //   x.categories = [];
    //   const attributes = x.children?.filter(y => [ReflectionKind.Accessor, ReflectionKind.Property].includes(y.kind) && y.comment)
    //     .map(y => {
    //       return {
    //         name: y.name,
    //         type: y.kind === ReflectionKind.Accessor ? this.getType((y.getSignature ?? y.setSignature)![0].type) : this.getType(y.type),
    //         description: y.comment?.summary.reduce((p, c) => `${p}${c.text} `, ''),
    //       };
    //     })
    //     .sort((a, b) => a.name.localeCompare(b.name));
    //   if (attributes?.length) {
    //     x.categories.push({ name: 'Attributes', children: attributes, hasType: true });
    //   }
    //   const methods = x.children?.filter(y => y.kindString === 'Method' && y.signatures![0].comment?.shortText)
    //     .map(y => ({
    //       name: `${y.name}(${(y.signatures![0].parameters ?? []).reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${c.name}: ${this.getType(c.type)}`, '')})`,
    //       description: y.signatures![0].comment?.shortText
    //     }))
    //     .sort((a, b) => a.name.localeCompare(b.name));
    //   if (methods?.length) {
    //     x.categories.push({ name: 'Methods', children: methods });
    //   }
    //   const events = x.comment?.blockTags?.filter(t => t.tag === 'emits').map(y => ({ name: y.text.split('|')[0], description: y.text.split('|')[1] }));
    //   if (events?.length) {
    //     x.categories.push({ name: 'Events', children: events });
    //   }
    // });
  }

  // getType(t?: IType): string | undefined {
  //   switch (t?.type) {
  //     case 'union': return t.types?.reduce((p, c, i) => `${p}${i > 0 ? ' | ' : ''}${this.getType(c)}`, '');
  //     case 'array': return `${t.elementType?.name}[]`;
  //     case 'intrinsic': return t.name;
  //     case 'literal': return `'${t.value}'`;
  //     case 'stringLiteral': return `'${t.value}'`;
  //     case 'reflection': {
  //       if (!t['declaration']?.signatures) {
  //         return '';
  //       }
  //       const signature = t['declaration'].signatures[0];
  //       return `(${(signature.parameters ?? []).reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${c.name}: ${this.getType(c.type)}`, '')}) => ${this.getType(signature.type)}`;
  //     }
  //     case 'reference':
  //       if (t.typeArguments && t.name !== 'Constructable') {
  //         return `${t.name}<${t.typeArguments.reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${this.getType(c)}`, '')}>`;
  //       } else {
  //         return t.name;
  //       }
  //     case 'typeOperator': return t.target?.queryType?.name;
  //     default: return t?.name;
  //   }

  // }
}
