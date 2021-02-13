import { IContainer } from 'aurelia';
import { MdcCardActions } from './mdc-card-actions/mdc-card-actions';
import { MdcCardMedia } from './mdc-card-media/mdc-card-media';
import { MdcCardActionButtons } from './mdc-card-action-buttons';
import { MdcCardPrimaryAction } from './mdc-card-primary-action';
import { MdcCardActionIcons } from './mdc-card-action-icons';
import { MdcCard } from './mdc-card';

export { MdcCard } from './mdc-card';

export const CardConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcCard, MdcCardActions, MdcCardMedia, MdcCardActionButtons, MdcCardPrimaryAction, MdcCardActionIcons);
  }
};
