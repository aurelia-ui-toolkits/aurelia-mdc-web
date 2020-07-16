import { viewEngineHooks } from "aurelia-framework";

@viewEngineHooks
export class EnhanceMdcFab {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll("[mdc-fab]");
		for (let i of Array.from(actions)) {
			i.setAttribute("as-element", "mdc-fab");
		}
	}
}
