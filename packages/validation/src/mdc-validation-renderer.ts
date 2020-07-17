import { ValidationRenderer, RenderInstruction, ResultInstruction, ValidateResult } from 'aurelia-validation';

interface IValidationGroup {
  unrender: ValidateResult[];
  render: ValidateResult[];
}

export class MdcValidationRenderer implements ValidationRenderer {
  render(instruction: RenderInstruction): void {
    const groupedInstructions = new Map<Element, IValidationGroup>();

    for (let i = 0; i < instruction.unrender.length; ++i) {
      const ri = instruction.unrender[i];
      for (let j = 0; j < ri.elements.length; ++j) {
        const el = ri.elements[j];
        const group = this.getOrAddGroup(groupedInstructions, el);
        group.unrender.push(ri.result);
      }
    }

    for (let i = 0; i < instruction.render.length; ++i) {
      const ri = instruction.render[i];
      for (let j = 0; j < ri.elements.length; ++j) {
        const el = ri.elements[j];
        const group = this.getOrAddGroup(groupedInstructions, el);
        group.render.push(ri.result);
      }
    }

    for (const [el, group] of groupedInstructions.entries()) {
      if (Object.getOwnPropertyDescriptor(el, 'valid')) {
        (el as any).valid = !group.render.find(x => !x.valid);
      }
    }
  }

  private getOrAddGroup(groupedInstructions: Map<Element, IValidationGroup>, el: Element): IValidationGroup {
    let group = groupedInstructions.get(el);
    if (!group) {
      group = { unrender: [], render: [] };
      groupedInstructions.set(el, group);
    }
    return group;
  }
}
