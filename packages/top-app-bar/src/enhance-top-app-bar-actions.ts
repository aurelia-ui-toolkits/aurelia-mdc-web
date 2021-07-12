import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceTopAppBarActions {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-top-app-bar-action-item=""','mdc-top-app-bar-action-item="" mdc-ripple="unbounded.bind: true"');
    template.innerHTML = template.innerHTML.replaceAll('mdc-top-app-bar-nav-icon=""','mdc-top-app-bar-nav-icon="" mdc-ripple="unbounded.bind: true"');
  }
}
