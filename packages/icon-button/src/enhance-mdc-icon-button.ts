// import { viewEngineHooks } from 'aurelia-framework';

// @viewEngineHooks
export class EnhanceMdcIconButton {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-icon-button]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-icon-button');
		}
	}
}
