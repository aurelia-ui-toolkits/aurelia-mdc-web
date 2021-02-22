import { customAttribute, inject } from 'aurelia';

/**
 * @selector [mdc-elevation]
 */
@inject(Element)
@customAttribute('mdc-elevation')
export class MdcElevation {
  constructor(private root: HTMLElement) { }

  value: string;
  valueChanged(newValue: string, oldValue?: string) {
    if (oldValue) {
      this.root.classList.add(`mdc-elevation--z${oldValue}`);
    } else {
      this.root.classList.add(`mdc-elevation--z${newValue}`);
    }
  }

  attached() {
    this.valueChanged(this.value, undefined);
  }
}
