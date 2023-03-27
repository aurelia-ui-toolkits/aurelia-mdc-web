import Aurelia, { inject, customAttribute, bindable, IAurelia } from 'aurelia';
import { XPosition, YPosition, AnchorBoundaryType } from '@material/tooltip';
import { booleanAttr, number } from '@aurelia-mdc-web/base';
import { MdcTooltip } from './mdc-tooltip';
import { MdcDefaultTooltipConfiguration } from './mdc-default-tooltip-configuration';
import { ICustomElementController } from '@aurelia/runtime-html';

/**
 * @selector [mdc-tooltip]
 */
@customAttribute('mdc-tooltip')
export class MdcTooltipAttribute {
  constructor(root: HTMLElement, private defaultConfiguration: MdcDefaultTooltipConfiguration, @IAurelia private readonly au: Aurelia) {
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

  @bindable({ set: number })
  showDelay: number;

  @bindable({ set: number })
  hideDelay: number;

  @bindable
  scrollHost?: HTMLElement | string = this.defaultConfiguration.scrollHost;

  tooltip: HTMLElement;
  // view: ISyntheticView;
  controller: ICustomElementController<MdcTooltip>;

  async attached() {
    // const def = this.templateCompiler.compile({ name: 'test', template: `<mdc-tooltip>${this.value}</mdc-tooltip>` }, this.container, null);
    this.tooltip = document.createElement('div');
    this.tooltip.innerHTML = '<mdc-tooltip anchor-elem.bind="root" x-position.bind="xPosition" y-position.bind="yPosition" boundary-type.bind="boundaryType" rich.bind="rich" persistent.bind="persistent" show-delay.bind="showDelay" hide-delay.bind="hideDelay" scroll-host.bind="scrollHost">${value}</mdc-tooltip>';

    this.controller = await this.au.enhance({
      component: this, host: this.tooltip
    });
    document.body.appendChild(this.tooltip);

    // const props = {
    //   'anchor-elem': new PropertyBindingInstruction('root', 'anchorElem', BindingMode.toView),
    //   'x-position': new PropertyBindingInstruction('xPosition', 'xPosition', BindingMode.default),
    //   'y-position': new PropertyBindingInstruction('yPosition', 'yPosition', BindingMode.default),
    //   'boundary-type': new PropertyBindingInstruction('boundaryType', 'boundaryType', BindingMode.default),
    //   'rich': new PropertyBindingInstruction('rich', 'rich', BindingMode.default),
    //   'persistent': new PropertyBindingInstruction('persistent', 'persistent', BindingMode.default),
    //   'show-delay': new PropertyBindingInstruction('showDelay', 'showDelay', BindingMode.default),
    //   'hide-delay': new PropertyBindingInstruction('hideDelay', 'hideDelay', BindingMode.default),
    //   'scroll-host': new PropertyBindingInstruction('scrollHost', 'scrollHost', BindingMode.default),
    // };

    // const renderPlan = createElement(this.platform, MdcTooltip, props);
    // const sv = renderPlan.createView(this.container);
    // sv.activate(sv, this.appRoot.controller, LifecycleFlags.none, Scope.create(this));
    // this.tooltip = sv.children![0].host!;
    // this.tooltip.querySelector('.mdc-tooltip__surface')!.innerHTML = this.value;
  }

  detached() {
    this.controller.deactivate(this.controller, null);
    // this.view.deactivate(this.view, this.appRoot.controller, LifecycleFlags.none);
    this.tooltip.remove();
  }
}
