import { inject, customAttribute, TemplatingEngine, View } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { XPosition, YPosition, AnchorBoundaryType } from '@material/tooltip';

/**
 * @selector [mdc-tooltip]
 */
@inject(Element, TemplatingEngine)
@customAttribute('mdc-tooltip')
export class MdcTooltipAttribute {
  constructor(root: HTMLElement, private templatingEngine: TemplatingEngine) {
    this.root = root;
  }

  root: HTMLElement;

  @bindable({ primaryProperty: true })
  value: string;

  @bindable.booleanAttr
  rich: boolean;

  @bindable.booleanAttr
  persistent: boolean;

  /** Sets the horizontal alignment of the tooltip */
  @bindable
  xPosition: keyof typeof XPosition;

  /** Sets the vertical alignment of the tooltip */
  @bindable
  yPosition: keyof typeof YPosition;

  /** Specifies whether the anchor element is bounded (element has an identifiable boundary such as a button) or unbounded (element does not have a visually declared boundary such as a text link).
   * Tooltips are placed closer to bounded anchor elements compared to unbounded anchor elements. If no type is specified, defaults to BOUNDED.
   **/
  @bindable
  boundaryType: keyof typeof AnchorBoundaryType;

  tooltip: HTMLElement;
  view: View;

  attached() {
    this.tooltip = document.createElement('mdc-tooltip');
    this.tooltip.setAttribute('anchor-elem.bind', 'root');
    this.tooltip.setAttribute('x-position.bind', 'xPosition');
    this.tooltip.setAttribute('y-position.bind', 'yPosition');
    this.tooltip.setAttribute('boundary-type.bind', 'boundaryType');
    this.tooltip.setAttribute('rich.bind', 'rich');
    this.tooltip.setAttribute('persistent.bind', 'persistent');
    this.tooltip.innerText = this.value;
    document.body.appendChild(this.tooltip);
    this.view = this.templatingEngine.enhance({
      element: this.tooltip,
      bindingContext: this
    });
  }

  detached() {
    this.view.detached();
    this.tooltip.remove();
  }
}
