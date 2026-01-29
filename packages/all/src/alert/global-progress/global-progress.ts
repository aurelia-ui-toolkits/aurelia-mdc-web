import { bindable, customElement, resolve } from 'aurelia';
import template from './global-progress.html?raw';
import './global-progress.scss';

@customElement({ name: 'global-progress', template })
export class GlobalProgress {
  private element = resolve(Element);

  @bindable({ type: Number })
  size: number = 100;

  @bindable({ type: Number })
  strokeWidth: number = 10;

  @bindable({ type: Number })
  progress?: number;

  @bindable
  text?: string;

  @bindable
  allowCancel: boolean | string;

  cancel() {
    this.element.dispatchEvent(new CustomEvent('global-progress:cancel', { bubbles: true }));
  }
}
