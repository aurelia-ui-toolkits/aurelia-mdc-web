import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCLinearProgressFoundation, MDCLinearProgressAdapter, WithMDCResizeObserver } from '@material/linear-progress';
import { bindable } from 'aurelia-typed-observable-plugin';
import { useView, inject, PLATFORM, customElement } from 'aurelia-framework';

/**
 * @selector mdc-linear-progress
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-linear-progress.html'))
@customElement('mdc-linear-progress')
export class MdcLinearProgress extends MdcComponent<MDCLinearProgressFoundation> {

  /** Sets the progress bar to this value. Value should be between [0, 1] or undefined for indeterminate progress indicator. */
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

  /** Sets the buffer bar to this value. Value should be between [0, 1] or undefined. */
  @bindable.number
  buffer?: number;
  async bufferChanged() {
    await this.initialised;
    if (this.buffer !== undefined && !isNaN(this.buffer)) {
      this.foundation?.setBuffer(this.buffer);
    }
  }

  /** Sets the component open state */
  @bindable.booleanAttr
  open: boolean;
  async openChanged() {
    await this.initialised;
    if (this.open) {
      this.foundation?.open();
    } else {
      this.foundation?.close();
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    this.progressChanged();
    this.openChanged();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCLinearProgressAdapter = {
      addClass: (className: string) => {
        this.root.classList.add(className);
      },
      forceLayout: () => {
        this.root.getBoundingClientRect();
      },
      setBufferBarStyle: (styleProperty: string, value: string) => {
        const bufferBar = this.root.querySelector<HTMLElement>(
          MDCLinearProgressFoundation.strings.BUFFER_BAR_SELECTOR);
        if (bufferBar) {
          bufferBar.style.setProperty(styleProperty, value);
        }
      },
      setPrimaryBarStyle: (styleProperty: string, value: string) => {
        const primaryBar = this.root.querySelector<HTMLElement>(
          MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
        if (primaryBar) {
          primaryBar.style.setProperty(styleProperty, value);
        }
      },
      hasClass: (className: string) => this.root.classList.contains(className),
      removeAttribute: (attributeName: string) => {
        this.root.removeAttribute(attributeName);
      },
      removeClass: (className: string) => {
        this.root.classList.remove(className);
      },
      setAttribute: (attributeName: string, value: string) => {
        this.root.setAttribute(attributeName, value);
      },
      setStyle: (name: string, value: string) => {
        this.root.style.setProperty(name, value);
      },
      attachResizeObserver: (callback) => {
        const RO = (window as unknown as WithMDCResizeObserver).ResizeObserver;
        if (RO) {
          const ro = new RO(callback);
          ro.observe(this.root);
          return ro;
        }

        return null;
      },
      getWidth: () => this.root.offsetWidth,
    };
    return new MDCLinearProgressFoundation(adapter);
  }
}
