import { templateCompilerHooks } from 'aurelia';

@templateCompilerHooks
export class EnhanceMdcSegmentedButtonSegment {
  compiling(template: HTMLElement | HTMLTemplateElement) {
    template.innerHTML = template.innerHTML.replaceAll('mdc-segmented-button-segment=""', 'as-element="mdc-segmented-button-segment" mdc-segmented-button-segment-element');
  }
}
