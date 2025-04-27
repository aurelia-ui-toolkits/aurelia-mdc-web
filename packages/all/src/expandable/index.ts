import { IContainer } from 'aurelia';
import { RippleConfiguration } from '../ripple';
import { MdcExpandable } from './mdc-expandable';

export { MdcExpandable } from './mdc-expandable';

let registered = false;

export const ExpandableConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcExpandable, RippleConfiguration);
    }
  }
};
