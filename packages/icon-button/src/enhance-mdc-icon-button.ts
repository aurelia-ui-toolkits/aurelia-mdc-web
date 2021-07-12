import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcIconButton {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-icon-button=""','as-element="mdc-icon-button"');
  }
}
