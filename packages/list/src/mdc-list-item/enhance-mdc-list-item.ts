// @viewEngineHooks
export class EnhanceMdcListItem {
  beforeCompile(template: DocumentFragment) {
    const actions = template.querySelectorAll('[mdc-list-item]');
    for (const i of Array.from(actions)) {
      i.setAttribute('as-element', 'mdc-list-item');
    }
  }
}
