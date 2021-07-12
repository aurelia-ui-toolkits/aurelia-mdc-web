import { IContainer } from '@aurelia/kernel';
import { MdcTopAppBar } from './mdc-top-app-bar';
import { MdcTopAppBarRow } from './mdc-top-app-bar-row';
import { MdcTopAppBarTitle } from './mdc-top-app-bar-title';
import { MdcTopAppBarSection } from './mdc-top-app-bar-section/mdc-top-app-bar-section';
import { MdcTopAppBarFixedAdjust } from './mdc-top-app-bar-fixed-adjust';
import { MdcTopAppBarNavIcon } from './mdc-top-app-bar-nav-icon';
import { MdcTopAppBarActionItem } from './mdc-top-app-bar-action-item';
import { EnhanceTopAppBarActions } from './enhance-top-app-bar-actions';

export { MdcTopAppBar, MdcTopAppBarRow, MdcTopAppBarTitle, MdcTopAppBarSection, MdcTopAppBarFixedAdjust, MdcTopAppBarNavIcon, MdcTopAppBarActionItem };

export const TopAppBarConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(
      MdcTopAppBar,
      MdcTopAppBarRow,
      MdcTopAppBarTitle,
      MdcTopAppBarSection,
      MdcTopAppBarFixedAdjust,
      MdcTopAppBarNavIcon,
      MdcTopAppBarActionItem,
      EnhanceTopAppBarActions
    );
  }
};
