import { IContainer } from '@aurelia/kernel';
import { MdcList, IMdcListElement } from './mdc-list';
import { MdcListDivider } from './mdc-list-divider/mdc-list-divider';
import { MdcListGroup, MdcListGroupSubheader } from './mdc-list-group';
import { MdcListItem, IMdcListItemElement, IMdcListActionEventDetail, IMdcListActionEvent } from './mdc-list-item/mdc-list-item';
import { MdcListItemLeading } from './mdc-list-item/mdc-list-item-leading';
import { MdcListItemTrailing } from './mdc-list-item/mdc-list-item-trailing';
import { MdcListItemPrimaryText } from './mdc-list-item-primary-text';
import { MdcListItemSecondaryText } from './mdc-list-item-secondary-text';
import { EnhanceMdcListItem } from './mdc-list-item/enhance-mdc-list-item';

export {
  MdcList, MdcListDivider, MdcListGroup, MdcListGroupSubheader, MdcListItem, MdcListItemLeading, MdcListItemTrailing, IMdcListItemElement,
  MdcListItemPrimaryText, MdcListItemSecondaryText, IMdcListActionEventDetail, IMdcListActionEvent, IMdcListElement
};

export const ListConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(
      MdcList,
      MdcListDivider,
      MdcListGroup,
      MdcListGroupSubheader,
      MdcListItem,
      MdcListItemLeading,
      MdcListItemTrailing,
      MdcListItemPrimaryText,
      MdcListItemSecondaryText,
      EnhanceMdcListItem
    );
  }
};
