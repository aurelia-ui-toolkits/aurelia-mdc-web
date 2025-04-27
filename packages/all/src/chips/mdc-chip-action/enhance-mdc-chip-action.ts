import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcChipAction {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-chip-action=""','as-element="mdc-chip-action"');
  }
}
