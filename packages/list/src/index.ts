import { IContainer } from '@aurelia/kernel';
import { MdcList } from './mdc-list';
import { MdcListDivider } from './mdc-list-divider/mdc-list-divider';
import { MdcListGroup, MdcListGroupSubheader } from './mdc-list-group';
import { MdcListItem, IMdcListActionEventDetail, IMdcListActionEvent } from './mdc-list-item/mdc-list-item';
import { MdcListItemGraphic } from './mdc-list-item-graphic';
import { MdcListItemMeta } from './mdc-list-item-meta';
import { MdcListItemText } from './mdc-list-item-text';
import { MdcListItemPrimaryText } from './mdc-list-item-primary-text';
import { MdcListItemSecondaryText } from './mdc-list-item-secondary-text';

export {
  MdcList, MdcListDivider, MdcListGroup, MdcListGroupSubheader, MdcListItem, MdcListItemGraphic, MdcListItemMeta,
  MdcListItemText, MdcListItemPrimaryText, MdcListItemSecondaryText, IMdcListActionEventDetail, IMdcListActionEvent
};

export const ListConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(
      MdcList,
      MdcListDivider,
      MdcListGroup,
      MdcListGroupSubheader,
      MdcListItem,
      MdcListItemGraphic,
      MdcListItemMeta,
      MdcListItemText,
      MdcListItemPrimaryText,
      MdcListItemSecondaryText
    );
  }
};
