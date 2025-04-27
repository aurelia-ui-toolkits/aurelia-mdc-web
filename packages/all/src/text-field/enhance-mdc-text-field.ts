import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcTextfield {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    if (template.innerHTML.includes('<mdc-text-field')) {
      template.innerHTML = template.innerHTML
        .replaceAll('<mdc-text-field ', '<label as-element="mdc-text-field" mdc-text-field-element ')
        .replaceAll('</mdc-text-field>', '</label>');
    }
  }
}
