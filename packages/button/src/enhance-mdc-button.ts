
// @viewEngineHooks
export class EnhanceMdcButton {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-button]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-button');
		}
	}
}
