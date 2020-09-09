import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCCircularProgressFoundation, MDCCircularProgressAdapter } from '@material/circular-progress';
import { bindable } from 'aurelia-typed-observable-plugin';
import { inject, useView, PLATFORM, customElement } from 'aurelia-framework';

/**
 * @selector mdc-circular-progress
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-circular-progress.html'))
@customElement('mdc-circular-progress')
export class MdcCircularProgress extends MdcComponent<MDCCircularProgressFoundation> {
  private determinateCircle_?: HTMLElement;

  radius: number = 47.5;
  strokeDasharray: number;
  strokeDashoffset: number;

  /** Size in pixels */
  @bindable.number
  size: number = 100;
  sizeChanged() {
    this.updateSizeAndStroke();
  }

  /** Stroke width in pixels */
  @bindable.number
  strokeWidth: number = 10;
  strokeWidthChanged() {
    this.updateSizeAndStroke();
  }

  /** The current progress value, which must be between 0 and 1 or undefined for an indeterminate spinner */
  @bindable.number
  progress?: number;
  async progressChanged() {
    await this.initialised;
    const determinate = this.progress !== undefined && !isNaN(this.progress);
    this.foundation?.setDeterminate(determinate);
    if (determinate) {
      this.foundation?.setProgress(this.progress!);
    }
  }

  bind() {
    this.updateSizeAndStroke();
  }

  updateSizeAndStroke() {
    this.radius = (this.size - 4) / 2 - this.strokeWidth;
    this.strokeDasharray = 2 * this.radius * Math.PI;
    this.strokeDashoffset = this.strokeDasharray / 2;
    this.root.style.setProperty('--mdc-circular-progress-size', `${this.size}px`);
    this.root.style.setProperty('--mdc-circular-progress-stroke-width', `${this.strokeWidth}px`);
    this.root.style.setProperty('--mdc-circular-progress-gap-patch-stroke-width', `${this.strokeWidth * 0.8}px`);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    this.progressChanged();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCCircularProgressAdapter = {
      addClass: (className: string) => this.root.classList.add(className),
      getDeterminateCircleAttribute: (attributeName: string) => this.determinateCircle_?.getAttribute(attributeName) ?? null,
      hasClass: (className: string) => this.root.classList.contains(className),
      removeClass: (className: string) => this.root.classList.remove(className),
      removeAttribute: (attributeName: string) => this.root.removeAttribute(attributeName),
      setAttribute: (attributeName: string, value: string) => this.root.setAttribute(attributeName, value),
      setDeterminateCircleAttribute: (attributeName: string, value: string) => this.determinateCircle_?.setAttribute(attributeName, value),
    };
    return new MDCCircularProgressFoundation(adapter);
  }
}

/** @hidden */
export interface IMdcCircularProgressElement extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  au: {
    controller: {
      viewModel: MdcCircularProgress;
    };
  };
}
