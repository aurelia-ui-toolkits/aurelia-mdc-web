import { viewEngineHooks } from 'aurelia-framework';

@viewEngineHooks
export class EnhanceMdcSegmentedButtonSegment {
	beforeCompile(template: DocumentFragment) {
		const actions = template.querySelectorAll('[mdc-segmented-button-segment]');
		for (const i of Array.from(actions)) {
			i.setAttribute('as-element', 'mdc-segmented-button-segment');
		}
	}
}
