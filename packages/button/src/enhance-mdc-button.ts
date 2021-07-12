import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcButton {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-button=""', 'as-element="mdc-button"');
  }
}
