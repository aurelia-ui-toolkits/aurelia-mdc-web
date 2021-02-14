import { IContainer } from 'aurelia';
import { MdcLineRipple } from './mdc-line-ripple';

export { MdcLineRipple } from './mdc-line-ripple';

export const LineRippleConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcLineRipple);
  }
};
