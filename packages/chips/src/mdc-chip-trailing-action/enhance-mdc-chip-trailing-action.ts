import { viewEngineHooks } from 'aurelia-framework';

@viewEngineHooks
export class EnhanceMdcChipTrailingAction {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-chip-trailing-action]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-chip-trailing-action');
		}
	}
}
