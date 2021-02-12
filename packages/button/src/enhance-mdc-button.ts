import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class EnhanceMdcButton {
  hydrating(controller: any) {
    const definition = controller.context.definition;
    if (!definition.needsCompile) {
      definition.template.querySelectorAll('button[mdc-button]').forEach((btn: HTMLElement) => {
        btn.removeAttribute('mdc-button');
        btn.setAttribute('as-element', 'mdc-button');
      });
    }
  }
	// load(template: DocumentFragment) {
	// 	const actions = template.querySelectorAll('[mdc-button]');
	// 	for (const i of Array.from(actions)) {
	// 		i.setAttribute('as-element', 'mdc-button');
	// 	}
	// }
}
