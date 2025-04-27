import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcListItem {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-list-item=""','as-element="mdc-list-item"');
  }
}
