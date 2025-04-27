import { IContainer } from 'aurelia';
import { MdcImageList } from './mdc-image-list';
import { MdcImageListItem } from './mdc-image-list-item/mdc-image-list-item';

export { MdcImageList } from './mdc-image-list';

let registered = false;

export const ImageListConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcImageList, MdcImageListItem);
    }
  }
};
