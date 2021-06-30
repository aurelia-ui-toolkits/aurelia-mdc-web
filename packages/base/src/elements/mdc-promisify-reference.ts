import { bindable, customElement, BindingMode } from 'aurelia';

@customElement('mdc-promisify-reference')
export class MdcPromisifyReference {
  resolve: (value: unknown | PromiseLike<unknown>) => void;

  @bindable({ mode: BindingMode.fromView })
  promiseRef: Promise<unknown>;

  @bindable({ mode: BindingMode.toView })
  reference: unknown;
  referenceChanged() {
    if (this.reference) {
      this.resolve(this.reference);
    }
  }

  attached() {
    this.promiseRef = new Promise(r => this.resolve = r);
  }
}
