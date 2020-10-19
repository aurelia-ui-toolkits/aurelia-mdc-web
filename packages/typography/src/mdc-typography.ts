import { inject, customAttribute } from 'aurelia';

class MdcTypography {
  constructor(private root: HTMLElement) { }

  type: 'headline1' | 'headline2' | 'headline3' | 'headline4' | 'headline5' | 'headline6'
    | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';

  afterAttach() {
    this.root.classList.add(this.type ? `mdc-typography--${this.type}` : 'mdc-typography');
  }
}

@inject(Element)
@customAttribute('mdc-headline1')
export class MdcHeadline1 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'headline1';
  }
}

@inject(Element)
@customAttribute('mdc-headline2')
export class MdcHeadline2 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'headline2';
  }
}

@inject(Element)
@customAttribute('mdc-headline3')
export class MdcHeadline3 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'headline3';
  }
}

@inject(Element)
@customAttribute('mdc-headline4')
export class MdcHeadline4 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'headline4';
  }
}

@inject(Element)
@customAttribute('mdc-headline5')
export class MdcHeadline5 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'headline5';
  }
}

@inject(Element)
@customAttribute('mdc-headline6')
export class MdcHeadline6 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'headline6';
  }
}

@inject(Element)
@customAttribute('mdc-subtitle1')
export class MdcSubtitle1 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'subtitle1';
  }
}

@inject(Element)
@customAttribute('mdc-subtitle2')
export class MdcSubtitle2 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'subtitle2';
  }
}

@inject(Element)
@customAttribute('mdc-body1')
export class MdcBody1 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'body1';
  }
}

@inject(Element)
@customAttribute('mdc-body2')
export class MdcBody2 extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'body2';
  }
}

@inject(Element)
@customAttribute('mdc-caption')
export class MdcCaption extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'caption';
  }
}

@inject(Element)
@customAttribute('mdc-typography-button')
export class MdcTypographyButton extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'button';
  }
}

@inject(Element)
@customAttribute('mdc-overline')
export class MdcOveline extends MdcTypography {
  constructor(root: HTMLElement){
    super(root);
    this.type = 'overline';
  }
}
