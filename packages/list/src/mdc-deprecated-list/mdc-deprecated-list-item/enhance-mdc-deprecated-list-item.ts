import { viewEngineHooks } from 'aurelia-framework';

@viewEngineHooks
export class EnhanceMdcDeprecatedListItem {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-deprecated-list-item]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-deprecated-list-item');
		}
	}
}
