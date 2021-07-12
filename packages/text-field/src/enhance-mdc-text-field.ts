import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcTextfield {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    // template.innerHTML = template.innerHTML.replaceAll('<mdc-text-field>','<label as-element="mdc-text-field">');
    if (template.innerHTML.includes('standart text field')) {
      template.innerHTML = template.innerHTML
        .replaceAll('<mdc-text-field ', '<label as-element="mdc-text-field" ')
        .replaceAll('</mdc-text-field>', '</label>');
    }
  }
}
