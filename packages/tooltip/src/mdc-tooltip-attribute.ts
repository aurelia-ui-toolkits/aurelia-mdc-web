import { inject, customAttribute, TemplatingEngine, View } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { XPosition, YPosition } from '@material/tooltip';

@inject(Element, TemplatingEngine)
@customAttribute('mdc-tooltip')
export class MdcTooltipAttribute {
  constructor(private root: HTMLElement, private templatingEngine: TemplatingEngine) { }

  @bindable({ primaryProperty: true })
  value: string;

  @bindable
  xPosition: keyof typeof XPosition;

  @bindable
  yPosition: keyof typeof YPosition;

  tooltip: HTMLElement;
  view: View;

  attached() {
    this.tooltip = document.createElement('mdc-tooltip');
    this.tooltip.setAttribute('anchor-elem.bind', 'anchorElem');
    if (this.xPosition) {
      this.tooltip.setAttribute('x-position.bind', 'xPosition');
    }
    if (this.yPosition) {
      this.tooltip.setAttribute('y-position.bind', 'yPosition');
    }
    this.tooltip.innerText = this.value;
    document.body.appendChild(this.tooltip);
    this.view = this.templatingEngine.enhance({
      element: this.tooltip,
      bindingContext: { anchorElem: this.root, xPosition: this.xPosition, yPosition: this.yPosition }
    });
  }

  detached() {
    this.view.detached();
    this.tooltip.remove();
  }
}
