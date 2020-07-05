import { viewEngineHooks } from "aurelia-framework";

@viewEngineHooks
export class EnhanceTopAppBarActions {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll("[mdc-top-app-bar-action-item],[mdc-top-app-bar-nav-icon]");
		for (let i of Array.from(actions)) {
			i.setAttribute("mdc-ripple", "unbounded.bind: true");
		}
	}
}
