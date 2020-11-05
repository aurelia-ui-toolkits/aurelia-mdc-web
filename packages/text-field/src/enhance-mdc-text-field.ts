import { viewEngineHooks } from 'aurelia-framework';

@viewEngineHooks
export class EnhanceMdcTextfield {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-text-field]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-text-field');
		}
	}
}
