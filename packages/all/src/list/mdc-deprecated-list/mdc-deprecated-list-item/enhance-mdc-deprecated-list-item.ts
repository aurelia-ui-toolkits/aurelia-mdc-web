import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcDeprecatedListItem {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-deprecated-list-item=""','as-element="mdc-deprecated-list-item"');
  }
}
