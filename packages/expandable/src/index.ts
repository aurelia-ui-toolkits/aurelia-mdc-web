import { IContainer } from 'aurelia';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { MdcExpandable } from './mdc-expandable';

export { MdcExpandable } from './mdc-expandable';

export const ExpandableConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcExpandable, RippleConfiguration);
  }
};
