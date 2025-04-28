import { ArrayType, DeclarationReflection, IntrinsicType, ReflectionKind, SomeType, UnionType } from 'typedoc/browser';

interface IClassInfo {
  name: string;
  description?: string;
  selectors?: string[];
  categories: {
    name: string;
    hasType?: boolean;
    items: {
      name: string;
      type?: string;
      description?: string;
    }[];
  }[]
}

export class DeclarationReflectionValueConverter {
  toView(d: DeclarationReflection): IClassInfo {
    const categories: IClassInfo['categories'] = [];

    const attributes = d.children?.filter(y => [ReflectionKind.Accessor, ReflectionKind.Property].includes(y.kind) && y.comment)
      .map(y => {
        return {
          name: y.name,
          type: this.getType(y.type),
          description: y.comment?.summary.map(s => s.text).join(' '),
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    if (attributes?.length) {
      categories.push({ name: 'Attributes', items: attributes, hasType: true });
    }

    const methods = d.children?.filter(y => y.kind === ReflectionKind.Method && y.signatures?.[0]?.comment?.summary.length)
      .map(y => ({
        name: `${y.name}(${(y.signatures![0].parameters ?? []).reduce((p, c, i) => `${p}${i > 0 ? ', ' : ''}${c.name}: ${this.getType(c.type)}`, '')})`,
        description: y.signatures![0].comment?.summary.map(s => s.text).join(' '),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
    if (methods?.length) {
      categories.push({ name: 'Methods', items: methods });
    }

    const events = d.comment?.blockTags?.filter(t => t.tag === '@emits').map(y => ({ name: y.content[0].text.split('|')[0], description: y.content[0].text.split('|')[1] }));
    if (events?.length) {
      categories.push({ name: 'Events', items: events });
    }


    return {
      name: d.name,
      description: d.comment?.summary.map((s) => s.text).join(' '),
      selectors: d.comment?.blockTags?.filter(y => y.tag === '@selector').map(y => y.content.map(s => s.text).join(' ')),
      categories
    };
  }

  getType(t: SomeType | undefined): string {
    return t?.toString() ?? 'unknown';
  }

}
