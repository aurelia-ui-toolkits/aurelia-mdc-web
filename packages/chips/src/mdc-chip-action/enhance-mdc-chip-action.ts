import { viewEngineHooks } from 'aurelia-framework';

@viewEngineHooks
export class EnhanceMdcChipAction {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-chip-action]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-chip-action');
		}
	}
}
