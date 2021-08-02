import { viewEngineHooks } from 'aurelia-framework';

@viewEngineHooks
export class EnhanceMdcSwitch {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-switch]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-switch');
		}
	}
}
