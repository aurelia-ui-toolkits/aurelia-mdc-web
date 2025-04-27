import { IContainer } from '@aurelia/kernel';
import { MdcTooltip, MdcTooltipAttribute } from './tooltip';
import { MdcValidationControllerFactory } from './validation';
import { AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { CheckedObserver } from '@aurelia/runtime-html';
import { MdcConfiguration } from './mdc-configuration';
import { strings } from '@material/select';
import { events as segmentedButtonEvents } from '@material/segmented-button/segmented-button/constants';
import { MdcSelectValueObserver } from './select/mdc-select-value-observer';
import { events as sliderEvents } from '@material/slider';
import { MdcBanner } from './banner';
import { MdcFocusTrap } from './base';
import { MdcPromisifyReference } from './base/elements/mdc-promisify-reference';
import { MdcButton, MdcButtonLabel } from './button';
import { EnhanceMdcButton } from './button/enhance-mdc-button';
import { MdcCard } from './card';
import { MdcCardActionButtons } from './card/mdc-card-action-buttons';
import { MdcCardActionIcons } from './card/mdc-card-action-icons';
import { MdcCardActions } from './card/mdc-card-actions/mdc-card-actions';
import { MdcCardMedia } from './card/mdc-card-media/mdc-card-media';
import { MdcCardPrimaryAction } from './card/mdc-card-primary-action';
import { MdcCheckbox } from './checkbox';
import { MdcChip, MdcChipAction, MdcChipSet } from './chips';
import { EnhanceMdcChipAction } from './chips/mdc-chip-action/enhance-mdc-chip-action';
import { MdcCircularProgress } from './circular-progress';
import { MdcDataTable } from './data-table';
import { MdcDataTableRow } from './data-table/mdc-data-table-row';
import { MdcDialog, MdcDialogService } from './dialog';
import { MdcDialogActions } from './dialog/mdc-dialog-actions';
import { MdcDialogContent } from './dialog/mdc-dialog-content';
import { MdcDialogTitle } from './dialog/mdc-dialog-title';
import { MdcDrawer, MdcDrawerContent, MdcDrawerAppContent, MdcDrawerHeader } from './drawer';
import { MdcElevation } from './elevation';
import { MdcExpandable } from './expandable';
import { MdcFab } from './fab';
import { EnhanceMdcFab } from './fab/enhance-mdc-fab';
import { MdcFabIcon } from './fab/mdc-fab-icon';
import { MdcFloatingLabel } from './floating-label';
import { MdcFormField } from './form-field';
import { MdcIconButton, MdcIconButtonIcon } from './icon-button';
import { EnhanceMdcIconButton } from './icon-button/enhance-mdc-icon-button';
import { MdcImageList } from './image-list';
import { MdcImageListItem } from './image-list/mdc-image-list-item/mdc-image-list-item';
import { MdcLayoutGrid } from './layout-grid';
import { MdcLayoutGridCell } from './layout-grid/mdc-layout-grid-cell/mdc-layout-grid-cell';
import { MdcLayoutGridInner } from './layout-grid/mdc-layout-grid-inner';
import { MdcLineRipple } from './line-ripple';
import { MdcLinearProgress } from './linear-progress';
import { MdcList, MdcListDivider, MdcListGroup, MdcListGroupSubheader, MdcListItem, MdcListItemLeading, MdcListItemTrailing, MdcListItemPrimaryText, MdcListItemSecondaryText, MdcDeprecatedList, MdcDeprecatedListItem, MdcDeprecatedListItemPrimaryText, MdcDeprecatedListItemSecondaryText, MdcDeprecatedListItemGraphic, MdcDeprecatedListItemMeta, MdcDeprecatedListDivider, MdcDeprecatedListGroup, MdcDeprecatedListGroupSubheader, IMdcListElement } from './list';
import { EnhanceMdcDeprecatedListItem } from './list/mdc-deprecated-list/mdc-deprecated-list-item/enhance-mdc-deprecated-list-item';
import { EnhanceMdcListItem } from './list/mdc-list-item/enhance-mdc-list-item';
import { MdcLookup } from './lookup';
import { MdcMenu } from './menu';
import { MdcMenuSurface } from './menu-surface';
import { MdcMenuSurfaceAnchor } from './menu-surface/mdc-menu-surface-anchor';
import { MdcMenuSelectionGroup } from './menu/mdc-menu-selection-group';
import { MdcMenuSelectionGroupIcon } from './menu/mdc-menu-selection-group-icon';
import { MdcNotchedOutline } from './notched-outline';
import { MdcRadio } from './radio';
import { MdcRipple } from './ripple';
import { MdcSegmentedButton, MdcSegmentedButtonSegment } from './segmented-button';
import { EnhanceMdcSegmentedButtonSegment } from './segmented-button/mdc-segmented-button-segment/enhance-mdc-segmented-button-segment';
import { MdcSelect } from './select';
import { MdcSelectHelperText } from './select/mdc-select-helper-text/mdc-select-helper-text';
import { MdcSelectIcon } from './select/mdc-select-icon';
import { MdcSlider } from './slider';
import { MdcSnackbar, MdcSnackbarService } from './snackbar';
import { MdcSwitch } from './switch';
import { EnhanceMdcSwitch } from './switch/enhance-mdc-switch';
import { MdcTabBar, MdcTab, MdcTabScroller, MdcTabIndicator } from './tab-bar';
import { MdcTextField } from './text-field';
import { EnhanceMdcTextfield } from './text-field/enhance-mdc-text-field';
import { MdcTextFieldCharacterCounter } from './text-field/mdc-text-field-character-counter';
import { MdcTextFieldHelperLine } from './text-field/mdc-text-field-helper-line/mdc-text-field-helper-line';
import { MdcTextFieldHelperText } from './text-field/mdc-text-field-helper-text/mdc-text-field-helper-text';
import { MdcTextFieldIcon } from './text-field/mdc-text-field-icon';
import { MdcTopAppBar, MdcTopAppBarRow, MdcTopAppBarTitle, MdcTopAppBarSection, MdcTopAppBarFixedAdjust, MdcTopAppBarNavIcon, MdcTopAppBarActionItem } from './top-app-bar';
import { EnhanceTopAppBarActions } from './top-app-bar/enhance-top-app-bar-actions';
import { MdcTreeView, MdcTreeViewNodeMeta, MdcTreeNode } from './tree-view';
import { NodeFilterValueConverter } from './tree-view/node-filter';
import { MdcBody1, MdcBody2, MdcCaption, MdcHeadline1, MdcHeadline2, MdcHeadline3, MdcHeadline4, MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton } from './typography';
import { IMdcListActionEvent, IMdcListActionEventDetail, IMdcListItemElement } from './list/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item';

let registered = false; //

export {
  MdcPromisifyReference, MdcFocusTrap, MdcButton, MdcButtonLabel, EnhanceMdcButton, MdcBanner, MdcCard, MdcCardActions, MdcCardMedia, MdcCardActionButtons, MdcCardPrimaryAction, MdcCardActionIcons,
  MdcCheckbox, MdcChip, MdcChipAction, EnhanceMdcChipAction, MdcChipSet, MdcCircularProgress, MdcDataTable, MdcDataTableRow, MdcDialog, MdcDialogActions, MdcDialogTitle, MdcDialogContent,
  MdcDrawer, MdcDrawerContent, MdcDrawerAppContent, MdcDrawerHeader, MdcElevation, MdcExpandable, MdcFab, MdcFabIcon, EnhanceMdcFab, MdcFloatingLabel, MdcFormField,
  MdcIconButton, MdcIconButtonIcon, EnhanceMdcIconButton, MdcImageList, MdcImageListItem, MdcLayoutGrid, MdcLayoutGridInner, MdcLayoutGridCell, MdcLineRipple,
  MdcLinearProgress, MdcList, MdcListDivider, MdcListGroup, MdcListGroupSubheader, MdcListItem, MdcListItemLeading, MdcListItemTrailing, MdcListItemPrimaryText, MdcListItemSecondaryText,
  EnhanceMdcListItem, MdcDeprecatedList, MdcDeprecatedListItem, EnhanceMdcDeprecatedListItem, MdcDeprecatedListItemPrimaryText, MdcDeprecatedListItemSecondaryText, MdcDeprecatedListItemGraphic,
  MdcDeprecatedListItemMeta, MdcDeprecatedListDivider, MdcDeprecatedListGroup, MdcDeprecatedListGroupSubheader, MdcLookup, MdcMenu, MdcMenuSelectionGroup, MdcMenuSelectionGroupIcon,
  MdcMenuSurface, MdcMenuSurfaceAnchor, MdcNotchedOutline, MdcRadio, MdcRipple, MdcSegmentedButton, MdcSegmentedButtonSegment, EnhanceMdcSegmentedButtonSegment, MdcSelect, MdcSelectIcon, MdcSelectHelperText,
  MdcSlider, MdcSnackbar, MdcSnackbarService, MdcSwitch, EnhanceMdcSwitch, MdcTabBar, MdcTab, MdcTabScroller, MdcTabIndicator, MdcTextField, MdcTextFieldIcon, MdcTextFieldHelperLine, MdcTextFieldHelperText,
  MdcTextFieldCharacterCounter, EnhanceMdcTextfield, MdcTooltip, MdcTooltipAttribute, MdcTopAppBar, MdcTopAppBarRow, MdcTopAppBarTitle, MdcTopAppBarSection, MdcTopAppBarFixedAdjust, MdcTopAppBarNavIcon,
  MdcTopAppBarActionItem, EnhanceTopAppBarActions, MdcTreeView, MdcTreeViewNodeMeta, MdcTreeNode, NodeFilterValueConverter, MdcBody1, MdcBody2, MdcCaption, MdcHeadline1, MdcHeadline2, MdcHeadline3,
  MdcHeadline4, MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton,
  MdcDialogService, MdcValidationControllerFactory
};

export { MdcComponent } from './base/mdc-component';
export type { IValidatedElement, IError } from './base/elements/i-validated-element';
export { MATERIAL_PALETTE } from './base/material-palette';
export { boolean, booleanAttr, date, number, string } from './base/interceptors';
export { nextElement } from './base/next-element';

export type { IMdcCheckboxElement } from './checkbox/mdc-checkbox';
export type { IMdcDialogOptions } from './dialog/mdc-dialog-service';
export type { IMdcListItemElement, IMdcListActionEventDetail, IMdcListActionEvent, IMdcListElement };
export type { IMdcLookupElement } from './lookup/mdc-lookup';
export type { IMdcMenuItemComponentEventDetail, IMdcMenuItemComponentEvent } from './menu/mdc-menu';
export type { IMdcRadioElement } from './radio/mdc-radio';
export type { IMdcRippleElement } from './ripple/mdc-ripple';
export type { IMdcSelectElement } from './select/mdc-select';
export type { IMdcSelectHelperTextElement } from './select/mdc-select-helper-text/mdc-select-helper-text';
export type { IMdcSliderElement } from './slider/mdc-slider';
export type { ISnackbarOptions } from './snackbar/mdc-snackbar-service';
export type { IMdcSwitchElement } from './switch/mdc-switch';
export type { IMdcTabElement } from './tab-bar/tab/mdc-tab';
export type { IMdcTextFieldElement } from './text-field/mdc-text-field';
export type { IMdcTextFieldHelperLineElement } from './text-field/mdc-text-field-helper-line/mdc-text-field-helper-line';
export { MdcValidationResultPresenter } from './validation/mdc-validation-result-presenter';


export const AllConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    }
    registered = true;
    AppTask.creating(IContainer, c => {
      const attrMapper = c.get(IAttrMapper);
      const nodeObserverLocator = c.get(NodeObserverLocator);

      attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-CHECKBOX' ? property === 'checked' : false);
      nodeObserverLocator.useConfig('MDC-CHECKBOX', 'checked', { events: ['change'], type: CheckedObserver });

      attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-CHIP' ? property === 'checked' : false);
      nodeObserverLocator.useConfig('MDC-CHIP', 'checked', { events: ['change'], type: CheckedObserver });

      attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-RADIO' ? property === 'checked' : false);
      nodeObserverLocator.useConfig('MDC-RADIO', 'checked', { events: ['change'], type: CheckedObserver });

      attrMapper.useTwoWay((el, property) => el.hasAttribute('mdc-segmented-button-segment-element') ? property === 'checked' : false);
      nodeObserverLocator.useConfig('MDC-SEGMENTED-BUTTON-SEGMENT', 'checked', { events: [segmentedButtonEvents.SELECTED, 'unselected'], type: CheckedObserver });

      attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-SELECT' ? property === 'value' : false);
      nodeObserverLocator.useConfig('MDC-SELECT', 'value', { events: [strings.CHANGE_EVENT], type: MdcSelectValueObserver });

      attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-SLIDER' ? property === 'value' || property === 'valuestart' : false);
      nodeObserverLocator.useConfig({
        'MDC-SLIDER': {
          value: { events: [sliderEvents.CHANGE, sliderEvents.INPUT] },
          valuestart: { events: [sliderEvents.CHANGE, sliderEvents.INPUT] }
        }
      });

      attrMapper.useTwoWay((el, property) => el.hasAttribute('mdc-switch-element') ? property === 'selected' : false);
      nodeObserverLocator.useConfig('MDC-SWITCH', 'selected', { events: ['change'] });

      attrMapper.useTwoWay((el, property) => el.hasAttribute('mdc-text-field-element') ? property === 'value' : false);
      nodeObserverLocator.useConfig('MDC-TEXT-FIELD', 'value', { events: ['input', 'change'] });

    }).register(container);

    return container.register(
      MdcPromisifyReference, MdcFocusTrap, MdcButton, MdcButtonLabel, EnhanceMdcButton, MdcBanner, MdcCard, MdcCardActions, MdcCardMedia, MdcCardActionButtons, MdcCardPrimaryAction, MdcCardActionIcons,
      MdcCheckbox, MdcChip, MdcChipAction, EnhanceMdcChipAction, MdcChipSet, MdcCircularProgress, MdcDataTable, MdcDataTableRow, MdcDialog, MdcDialogActions, MdcDialogTitle, MdcDialogContent,
      MdcDrawer, MdcDrawerContent, MdcDrawerAppContent, MdcDrawerHeader, MdcElevation, MdcExpandable, MdcFab, MdcFabIcon, EnhanceMdcFab, MdcFloatingLabel, MdcFormField,
      MdcIconButton, MdcIconButtonIcon, EnhanceMdcIconButton, MdcImageList, MdcImageListItem, MdcLayoutGrid, MdcLayoutGridInner, MdcLayoutGridCell, MdcLineRipple,
      MdcLinearProgress, MdcList, MdcListDivider, MdcListGroup, MdcListGroupSubheader, MdcListItem, MdcListItemLeading, MdcListItemTrailing, MdcListItemPrimaryText, MdcListItemSecondaryText,
      EnhanceMdcListItem, MdcDeprecatedList, MdcDeprecatedListItem, EnhanceMdcDeprecatedListItem, MdcDeprecatedListItemPrimaryText, MdcDeprecatedListItemSecondaryText, MdcDeprecatedListItemGraphic,
      MdcDeprecatedListItemMeta, MdcDeprecatedListDivider, MdcDeprecatedListGroup, MdcDeprecatedListGroupSubheader, MdcLookup, MdcMenu, MdcMenuSelectionGroup, MdcMenuSelectionGroupIcon,
      MdcMenuSurface, MdcMenuSurfaceAnchor, MdcNotchedOutline, MdcRadio, MdcRipple, MdcSegmentedButton, MdcSegmentedButtonSegment, EnhanceMdcSegmentedButtonSegment, MdcSelect, MdcSelectIcon, MdcSelectHelperText,
      MdcSlider, MdcSnackbar, MdcSnackbarService, MdcSwitch, EnhanceMdcSwitch, MdcTabBar, MdcTab, MdcTabScroller, MdcTabIndicator, MdcTextField, MdcTextFieldIcon, MdcTextFieldHelperLine, MdcTextFieldHelperText,
      MdcTextFieldCharacterCounter, EnhanceMdcTextfield, MdcTooltip, MdcTooltipAttribute, MdcTopAppBar, MdcTopAppBarRow, MdcTopAppBarTitle, MdcTopAppBarSection, MdcTopAppBarFixedAdjust, MdcTopAppBarNavIcon,
      MdcTopAppBarActionItem, EnhanceTopAppBarActions, MdcTreeView, MdcTreeViewNodeMeta, MdcTreeNode, NodeFilterValueConverter, MdcBody1, MdcBody2, MdcCaption, MdcHeadline1, MdcHeadline2, MdcHeadline3,
      MdcHeadline4, MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton
    );
  },
  customize(optionsProvider: (config: MdcConfiguration) => void) {
    return {
      register(container: IContainer): IContainer {
        const options = container.get(MdcConfiguration);
        optionsProvider(options);
        return AllConfiguration.register(container);
      },
    };
  }

  /**
   * Create a new container with this configuration applied to it.
   */
  // createContainer(): IContainer {
  //   return this.register(DI.createContainer());
  // }
};
