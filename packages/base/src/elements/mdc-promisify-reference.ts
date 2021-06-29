import { bindable, customElement, BindingMode } from 'aurelia';

@customElement({ name: 'mdc-promisify-reference', template: '<template></template>' })
export class MdcPromisifyReference {
  resolve: (value: unknown | PromiseLike<unknown>) => void;

  @bindable({ mode: BindingMode.fromView })
  promise: Promise<unknown>;

  @bindable({ mode: BindingMode.toView })
  reference: unknown;
  referenceChanged() {
    if (this.reference) {
      this.resolve(this.reference);
    }
  }

  attached() {
    this.promise = new Promise(r => this.resolve = r);
  }
}
