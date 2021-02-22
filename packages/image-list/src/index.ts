import { IContainer } from 'aurelia';
import { MdcImageList } from './mdc-image-list';
import { MdcImageListItem } from './mdc-image-list-item/mdc-image-list-item';

export { MdcImageList } from './mdc-image-list';

export const ImageListConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcImageList, MdcImageListItem);
  }
};
