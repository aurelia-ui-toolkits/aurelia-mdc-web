import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcSwitch {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-switch=""','as-element="mdc-switch"');
  }
}
