import { bindingMode } from 'aurelia-binding';
import { bindable, customElement, noView } from 'aurelia-templating';

@customElement('mdc-promisify-reference')
@noView
export class MdcPromisifyReference {
  resolve: (value: unknown | PromiseLike<unknown>) => void;

  @bindable({defaultBindingMode: bindingMode.fromView})
  promise: Promise<unknown>;

  @bindable({defaultBindingMode: bindingMode.toView})
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
