import { IContainer } from '@aurelia/kernel';
import { MdcList, IMdcListElement } from './mdc-list';
import { MdcListDivider } from './mdc-list-divider/mdc-list-divider';
import { MdcListGroup, MdcListGroupSubheader } from './mdc-list-group';
import { MdcListItem } from './mdc-list-item/mdc-list-item';
import type { IMdcListItemElement, IMdcListActionEventDetail, IMdcListActionEvent } from './mdc-list-item/mdc-list-item';
import { MdcListItemLeading } from './mdc-list-item/mdc-list-item-leading';
import { MdcListItemTrailing } from './mdc-list-item/mdc-list-item-trailing';
import { MdcListItemPrimaryText } from './mdc-list-item-primary-text';
import { MdcListItemSecondaryText } from './mdc-list-item-secondary-text';
import { MdcListItemOverlineText } from './mdc-list-item-overline-text';
import { EnhanceMdcListItem } from './mdc-list-item/enhance-mdc-list-item';
import { MdcDeprecatedList } from './mdc-deprecated-list/mdc-deprecated-list';
import { MdcDeprecatedListItem } from './mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item';
import { EnhanceMdcDeprecatedListItem } from './mdc-deprecated-list/mdc-deprecated-list-item/enhance-mdc-deprecated-list-item';
import { MdcDeprecatedListItemPrimaryText } from './mdc-deprecated-list/mdc-deprecated-list-item-primary-text';
import { MdcDeprecatedListItemSecondaryText } from './mdc-deprecated-list/mdc-deprecated-list-item-secondary-text';
import { MdcDeprecatedListItemGraphic } from './mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item-graphic';
import { MdcDeprecatedListItemMeta } from './mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item-meta';
import { MdcDeprecatedListGroup, MdcDeprecatedListGroupSubheader } from './mdc-deprecated-list/mdc-deprecated-list-group';
import { MdcDeprecatedListDivider } from './mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider';

export {
  MdcList, MdcListDivider, MdcListGroup, MdcListGroupSubheader, MdcListItem, MdcListItemLeading, MdcListItemTrailing,
  MdcListItemPrimaryText, MdcListItemSecondaryText, MdcListItemOverlineText,
  MdcDeprecatedList,
  MdcDeprecatedListItem,
  MdcDeprecatedListItemPrimaryText,
  MdcDeprecatedListItemSecondaryText,
  MdcDeprecatedListItemGraphic,
  MdcDeprecatedListItemMeta,
  MdcDeprecatedListDivider,
  MdcDeprecatedListGroup,
  MdcDeprecatedListGroupSubheader
};

export type { IMdcListItemElement, IMdcListActionEventDetail, IMdcListActionEvent, IMdcListElement };

let registered = false;

export const ListConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
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
        EnhanceMdcListItem,

        MdcDeprecatedList,
        MdcDeprecatedListItem,
        EnhanceMdcDeprecatedListItem,
        MdcDeprecatedListItemPrimaryText,
        MdcDeprecatedListItemSecondaryText,
        MdcDeprecatedListItemGraphic,
        MdcDeprecatedListItemMeta,
        MdcDeprecatedListDivider,
        MdcDeprecatedListGroup,
        MdcDeprecatedListGroupSubheader
      );
    }
  }
};
