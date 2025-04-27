import { IContainer } from '@aurelia/kernel';
import {
  MdcBody1, MdcBody2, MdcCaption, MdcHeadline1, MdcHeadline2, MdcHeadline3, MdcHeadline4,
  MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton
} from './mdc-typography';
export {
  MdcBody1, MdcBody2, MdcCaption, MdcHeadline1, MdcHeadline2, MdcHeadline3, MdcHeadline4,
  MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton
};

let registered = false;

export const TypographyConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(
        MdcBody1, MdcBody2, MdcCaption, MdcHeadline1, MdcHeadline2, MdcHeadline3, MdcHeadline4,
        MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton
      );
    }
  }
};
