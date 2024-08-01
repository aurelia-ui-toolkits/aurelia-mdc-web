import { customAttribute, bindable, IAurelia, IAppRoot, inject } from 'aurelia';
import { XPosition, YPosition, AnchorBoundaryType } from '@material/tooltip';
import { booleanAttr, number } from '@aurelia-mdc-web/base';
import { MdcDefaultTooltipConfiguration } from './mdc-default-tooltip-configuration';

/**
 * @selector [mdc-tooltip]
 */
@inject(Element, MdcDefaultTooltipConfiguration, IAurelia)
@customAttribute('mdc-tooltip')
export class MdcTooltipAttribute {
  constructor(root: HTMLElement, private defaultConfiguration: MdcDefaultTooltipConfiguration, private readonly au: IAurelia) {
    this.root = root;
  }

  root: HTMLElement;

  @bindable({ primary: true })
  value: string;
  valueChanged() {
    this.context.value = this.value;
  }

  @bindable({ set: booleanAttr })
  rich: boolean;
  richChanged() {
    this.context.rich = this.rich;
  }

  @bindable({ set: booleanAttr })
  persistent: boolean;
  persistenthanged() {
    this.context.persistent = this.persistent;
  }

  /** Sets the horizontal alignment of the tooltip */
  @bindable()
  xPosition: keyof typeof XPosition;
  xPositionChanged() {
    this.context.xPosition = this.xPosition;
  }

  /** Sets the vertical alignment of the tooltip */
  @bindable()
  yPosition: keyof typeof YPosition;
  yPositionChanged() {
    this.context.yPosition = this.yPosition;
  }

  /** Specifies whether the anchor element is bounded (element has an identifiable boundary such as a button) or unbounded (element does not have a visually declared boundary such as a text link).
   * Tooltips are placed closer to bounded anchor elements compared to unbounded anchor elements. If no type is specified, defaults to BOUNDED.
   **/
  @bindable()
  boundaryType: keyof typeof AnchorBoundaryType;
  boundaryTypeChanged() {
    this.context.boundaryType = this.boundaryType;
  }

  @bindable({ set: number })
  showDelay: number;
  showDelayChanged() {
    this.context.showDelay = this.showDelay;
  }

  @bindable({ set: number })
  hideDelay: number;
  hideDelayChanged() {
    this.context.hideDelay = this.hideDelay;
  }

  @bindable()
  scrollHost?: HTMLElement | string = this.defaultConfiguration.scrollHost;
  scrollHostChanged() {
    this.context.scrollHost = this.scrollHost;
  }

  tooltip: HTMLElement;
  controller: IAppRoot<any>;
  context: Partial<{
    root: HTMLElement;
    value: string;
    rich: boolean;
    persistent: boolean;
    xPosition: keyof typeof XPosition;
    yPosition: keyof typeof YPosition;
    boundaryType: keyof typeof AnchorBoundaryType;
    showDelay: number;
    hideDelay: number;
    scrollHost?: HTMLElement | string;
  }>;

  async attached() {
    this.tooltip = document.createElement('div');
    this.tooltip.innerHTML = '<mdc-tooltip anchor-elem.bind="root" x-position.bind="xPosition" y-position.bind="yPosition" boundary-type.bind="boundaryType" rich.bind="rich" persistent.bind="persistent" show-delay.bind="showDelay" hide-delay.bind="hideDelay" scroll-host.bind="scrollHost">${value}</mdc-tooltip>';
    this.context = {
      root: this.root,
      value: this.value,
      rich: this.rich,
      persistent: this.persistent,
      xPosition: this.xPosition,
      yPosition: this.yPosition,
      boundaryType: this.boundaryType,
      showDelay: this.showDelay,
      hideDelay: this.hideDelay,
      scrollHost: this.scrollHost
    };
    this.controller = await this.au.enhance({
      component: this.context, host: this.tooltip
    });
    document.body.appendChild(this.tooltip);
  }

  detached() {
    this.controller.deactivate();
    this.tooltip.remove();
  }
}
