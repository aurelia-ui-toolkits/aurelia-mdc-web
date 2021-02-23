import { inject, customAttribute, bindable, createElement, IPlatform, IContainer, IAppRoot, LifecycleFlags, BindingMode } from 'aurelia';
import { XPosition, YPosition, AnchorBoundaryType } from '@material/tooltip';
import { booleanAttr } from '@aurelia-mdc-web/base';
import { MdcTooltip } from './mdc-tooltip';
import { Scope } from '@aurelia/runtime';
import { PropertyBindingInstruction, ISyntheticView, ITemplateCompiler } from '@aurelia/runtime-html';

/**
 * @selector [mdc-tooltip]
 */
@inject(Element, IPlatform, IContainer, IAppRoot, ITemplateCompiler)
@customAttribute('mdc-tooltip')
export class MdcTooltipAttribute {
  constructor(root: HTMLElement, private platform: IPlatform, private container: IContainer, private appRoot: IAppRoot,
    private templateCompiler: ITemplateCompiler) {
    this.root = root;
  }

  root: HTMLElement;

  @bindable({ primary: true })
  value: string;

  @bindable({ set: booleanAttr })
  rich: boolean;

  @bindable({ set: booleanAttr })
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
  view: ISyntheticView;

  attached() {
    const def = this.templateCompiler.compile({ name: 'test', template: `<mdc-tooltip>${this.value}</mdc-tooltip>` }, this.container, null);

    const props = {
      'anchor-elem': new PropertyBindingInstruction('root', 'anchorElem', BindingMode.toView),
      'x-position': new PropertyBindingInstruction('xPosition', 'xPosition', BindingMode.default),
      'y-position': new PropertyBindingInstruction('yPosition', 'yPosition', BindingMode.default),
      'boundary-type': new PropertyBindingInstruction('boundaryType', 'boundaryType', BindingMode.default),
      'rich': new PropertyBindingInstruction('rich', 'rich', BindingMode.default),
      'persistent': new PropertyBindingInstruction('persistent', 'persistent', BindingMode.default),
    };

    const renderPlan = createElement(this.platform, MdcTooltip, props);
    const sv = renderPlan.createView(this.container);
    sv.activate(sv, this.appRoot.controller, LifecycleFlags.none, Scope.create(this));
    this.tooltip = sv.children![0].host!;
    this.tooltip.querySelector('.mdc-tooltip__surface')!.innerHTML = this.value;
    document.body.appendChild(this.tooltip);

    // this.tooltip = document.createElement('mdc-tooltip');
    // this.tooltip.setAttribute('anchor-elem.bind', 'root');
    // this.tooltip.setAttribute('x-position.bind', 'xPosition');
    // this.tooltip.setAttribute('y-position.bind', 'yPosition');
    // this.tooltip.setAttribute('boundary-type.bind', 'boundaryType');
    // this.tooltip.setAttribute('rich.bind', 'rich');
    // this.tooltip.setAttribute('persistent.bind', 'persistent');
    // this.tooltip.innerText = this.value;
    // document.body.appendChild(this.tooltip);
    // this.view = this.templatingEngine.enhance({
    //   element: this.tooltip,
    //   bindingContext: this
    // });
  }

  detached() {
    this.view.deactivate(this.view, this.appRoot.controller, LifecycleFlags.none);
    this.tooltip.remove();
  }
}
