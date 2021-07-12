import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcFab {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-fab=""','as-element="mdc-fab"');
  }
}
