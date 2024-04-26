import { IContainer } from 'aurelia';
import { MdcLineRipple } from './mdc-line-ripple';

export { MdcLineRipple } from './mdc-line-ripple';

let registered = false;

export const LineRippleConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcLineRipple);
    }
  }
};
