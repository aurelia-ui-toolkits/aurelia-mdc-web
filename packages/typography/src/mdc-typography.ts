import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-typography')
export class MdcTypography {
  constructor(private root: HTMLElement) { }

  value: 'headline1' | 'headline2' | 'headline3' | 'headline4' | 'headline5' | 'headline6'
    | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';

  attached() {
    this.root.classList.add(this.value ? `mdc-typography--${this.value}` : 'mdc-typography');
  }
}
