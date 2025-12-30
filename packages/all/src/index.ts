import { IContainer } from '@aurelia/kernel';
import { AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { CheckedObserver } from '@aurelia/runtime-html';
import { MdcConfiguration } from './mdc-configuration';
import { strings } from '@material/select';
import { events as segmentedButtonEvents } from '@material/segmented-button/segmented-button/constants';
import { MdcSelectValueObserver } from './select/mdc-select-value-observer';
import { events as sliderEvents } from '@material/slider';
import { MdcFocusTrap } from './base';
import { MdcPromisifyReference } from './base/elements/mdc-promisify-reference';
import { EnhanceMdcButton } from './button/enhance-mdc-button';
import { MdcCardActionButtons } from './card/mdc-card-action-buttons';
import { MdcCardActionIcons } from './card/mdc-card-action-icons';
import { MdcCardActions } from './card/mdc-card-actions/mdc-card-actions';
import { MdcCardMedia } from './card/mdc-card-media/mdc-card-media';
import { MdcCardPrimaryAction } from './card/mdc-card-primary-action';
import { EnhanceMdcChipAction } from './chips/mdc-chip-action/enhance-mdc-chip-action';
import { MdcDataTableRow } from './data-table/mdc-data-table-row';
import { MdcDialogActions } from './dialog/mdc-dialog-actions';
import { MdcDialogContent } from './dialog/mdc-dialog-content';
import { MdcDialogTitle } from './dialog/mdc-dialog-title';
import { EnhanceMdcFab } from './fab/enhance-mdc-fab';
import { MdcFabIcon } from './fab/mdc-fab-icon';
import { EnhanceMdcIconButton } from './icon-button/enhance-mdc-icon-button';
import { MdcImageListItem } from './image-list/mdc-image-list-item/mdc-image-list-item';
import { MdcLayoutGridCell } from './layout-grid/mdc-layout-grid-cell/mdc-layout-grid-cell';
import { MdcLayoutGridInner } from './layout-grid/mdc-layout-grid-inner';
import { EnhanceMdcDeprecatedListItem } from './list/mdc-deprecated-list/mdc-deprecated-list-item/enhance-mdc-deprecated-list-item';
import { EnhanceMdcListItem } from './list/mdc-list-item/enhance-mdc-list-item';
import { MdcMenuSurfaceAnchor } from './menu-surface/mdc-menu-surface-anchor';
import { MdcMenuSelectionGroup } from './menu/mdc-menu-selection-group';
import { MdcMenuSelectionGroupIcon } from './menu/mdc-menu-selection-group-icon';
import { EnhanceMdcSegmentedButtonSegment } from './segmented-button/mdc-segmented-button-segment/enhance-mdc-segmented-button-segment';
import { MdcSelectHelperText } from './select/mdc-select-helper-text/mdc-select-helper-text';
import { MdcSelectIcon } from './select/mdc-select-icon';
import { EnhanceMdcSwitch } from './switch/enhance-mdc-switch';
import { EnhanceMdcTextfield } from './text-field/enhance-mdc-text-field';
import { MdcTextFieldCharacterCounter } from './text-field/mdc-text-field-character-counter';
import { MdcTextFieldHelperLine } from './text-field/mdc-text-field-helper-line/mdc-text-field-helper-line';
import { MdcTextFieldHelperText } from './text-field/mdc-text-field-helper-text/mdc-text-field-helper-text';
import { MdcTextFieldIcon } from './text-field/mdc-text-field-icon';
import { EnhanceTopAppBarActions } from './top-app-bar/enhance-top-app-bar-actions';
import { NodeFilterValueConverter } from './tree-view/node-filter';
import { IMdcListActionEvent, IMdcListActionEventDetail, IMdcListItemElement, MdcDeprecatedListItem } from './list/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item';
import { MdcRipple } from './ripple/mdc-ripple';
import { MdcSnackbar } from './snackbar/mdc-snackbar';
import { MdcSnackbarService } from './snackbar/mdc-snackbar-service';
import { MdcSwitch } from './switch/mdc-switch';
import { MdcTextField } from './text-field/mdc-text-field';
import { MdcTooltip } from './tooltip/mdc-tooltip';
import { MdcTooltipAttribute } from './tooltip/mdc-tooltip-attribute';
import { MdcTopAppBar } from './top-app-bar/mdc-top-app-bar';
import { MdcTopAppBarActionItem } from './top-app-bar/mdc-top-app-bar-action-item';
import { MdcTopAppBarFixedAdjust } from './top-app-bar/mdc-top-app-bar-fixed-adjust';
import { MdcTopAppBarNavIcon } from './top-app-bar/mdc-top-app-bar-nav-icon';
import { MdcTopAppBarRow } from './top-app-bar/mdc-top-app-bar-row';
import { MdcTopAppBarSection } from './top-app-bar/mdc-top-app-bar-section/mdc-top-app-bar-section';
import { MdcTopAppBarTitle } from './top-app-bar/mdc-top-app-bar-title';
import { MdcTreeNode } from './tree-view/mdc-tree-node';
import { MdcTreeViewNodeMeta } from './tree-view/mdc-tree-node-meta';
import { MdcTreeView } from './tree-view/mdc-tree-view';
import { MdcBody1, MdcBody2, MdcCaption, MdcHeadline1, MdcHeadline2, MdcHeadline3, MdcHeadline4, MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton } from './typography/mdc-typography';
import { MdcValidationControllerFactory } from './validation/mdc-validation-controller-factory';
import { MdcBanner } from './banner/mdc-banner';
import { MdcButton } from './button/mdc-button';
import { MdcButtonLabel } from './button/mdc-button-label';
import { MdcCard } from './card/mdc-card';
import { MdcChipAction } from './chips/mdc-chip-action/mdc-chip-action';
import { MdcChipSet } from './chips/mdc-chip-set/mdc-chip-set';
import { MdcChip } from './chips/mdc-chip/mdc-chip';
import { MdcCircularProgress } from './circular-progress/mdc-circular-progress';
import { MdcDataTable } from './data-table/mdc-data-table';
import { MdcDialog } from './dialog/mdc-dialog';
import { MdcDialogService } from './dialog/mdc-dialog-service';
import { MdcDrawer } from './drawer/mdc-drawer';
import { MdcDrawerAppContent } from './drawer/mdc-drawer-app-content';
import { MdcDrawerContent } from './drawer/mdc-drawer-content';
import { MdcDrawerHeader } from './drawer/mdc-drawer-header/mdc-drawer-header';
import { MdcElevation } from './elevation/mdc-elevation';
import { MdcExpandable } from './expandable/mdc-expandable';
import { MdcFab } from './fab/mdc-fab';
import { MdcFormField } from './form-field/mdc-form-field';
import { MdcIconButton } from './icon-button/mdc-icon-button';
import { MdcIconButtonIcon } from './icon-button/mdc-icon-button-icon/mdc-icon-button-icon';
import { MdcImageList } from './image-list/mdc-image-list';
import { MdcLayoutGrid } from './layout-grid/mdc-layout-grid';
import { MdcLinearProgress } from './linear-progress/mdc-linear-progress';
import { MdcSlider } from './slider/mdc-slider';
import { MdcTabIndicator } from './tab-bar/indicator/mdc-tab-indicator';
import { MdcTabBar } from './tab-bar/mdc-tab-bar';
import { MdcTabScroller } from './tab-bar/scroller/mdc-tab-scroller';
import { MdcTab } from './tab-bar/tab/mdc-tab';
import { MdcCheckbox } from './checkbox/mdc-checkbox';
import { MdcFloatingLabel } from './floating-label/mdc-floating-label';
import { MdcLineRipple } from './line-ripple/mdc-line-ripple';
import { MdcDeprecatedList } from './list/mdc-deprecated-list/mdc-deprecated-list';
import { MdcDeprecatedListDivider } from './list/mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider';
import { MdcDeprecatedListGroup, MdcDeprecatedListGroupSubheader } from './list/mdc-deprecated-list/mdc-deprecated-list-group';
import { MdcDeprecatedListItemPrimaryText } from './list/mdc-deprecated-list/mdc-deprecated-list-item-primary-text';
import { MdcDeprecatedListItemSecondaryText } from './list/mdc-deprecated-list/mdc-deprecated-list-item-secondary-text';
import { MdcDeprecatedListItemGraphic } from './list/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item-graphic';
import { MdcDeprecatedListItemMeta } from './list/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item-meta';
import { MdcList, IMdcListElement } from './list/mdc-list';
import { MdcListDivider } from './list/mdc-list-divider/mdc-list-divider';
import { MdcListGroup, MdcListGroupSubheader } from './list/mdc-list-group';
import { MdcListItemPrimaryText } from './list/mdc-list-item-primary-text';
import { MdcListItemSecondaryText } from './list/mdc-list-item-secondary-text';
import { MdcListItem } from './list/mdc-list-item/mdc-list-item';
import { MdcListItemLeading } from './list/mdc-list-item/mdc-list-item-leading';
import { MdcListItemTrailing } from './list/mdc-list-item/mdc-list-item-trailing';
import { MdcLookup } from './lookup/mdc-lookup';
import { MdcMenuSurface } from './menu-surface/mdc-menu-surface';
import { MdcMenu } from './menu/mdc-menu';
import { MdcNotchedOutline } from './notched-outline/mdc-notched-outline';
import { MdcRadio } from './radio/mdc-radio';
import { MdcSegmentedButton } from './segmented-button/mdc-segmented-button';
import { MdcSegmentedButtonSegment } from './segmented-button/mdc-segmented-button-segment/mdc-segmented-button-segment';
import { MdcSelect } from './select/mdc-select';
import { MdcIcon } from './icon/mdc-icon';
import { MdcDefaultLookupConfiguration } from './lookup/mdc-lookup-configuration';
import { MdcDefaultTextFieldConfiguration } from './text-field/mdc-default-text-field-configuration';
import { AlertModal } from './alert/alert-modal/alert-modal';
import { GlobalProgress } from './alert/global-progress/global-progress';
import { PromptDialog } from './alert/prompt-dialog/prompt-dialog';
import { MdcInputmaskCustomAttribute, EnhanceMask } from './text-field/mdc-inputmask';
import { IAlertModalPayload } from './alert/alert-modal/i-alert-modal-payload';
import { AlertService } from './alert/alert-service';
import { confirmAction } from './alert/decorators/confirm-action';
import { usingProgress } from './alert/decorators/using-progress';
import { ExceptionsTracker } from './alert/exceptions-tracker';
import { validate } from './validation/validate';

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
  MdcHeadline4, MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton, MdcIcon, validate,
  MdcDialogService, MdcValidationControllerFactory, MdcDefaultLookupConfiguration, MdcDefaultTextFieldConfiguration, AlertService, confirmAction, usingProgress, ExceptionsTracker, IAlertModalPayload
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
export type { IPromptDialogData } from './alert/prompt-dialog/prompt-dialog';
export type { IWithAlertService } from './alert/decorators/using-progress';
export type { IWithValidationController } from './validation/validate';


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
      MdcHeadline4, MdcHeadline5, MdcHeadline6, MdcOveline, MdcSubtitle1, MdcSubtitle2, MdcTypographyButton, MdcIcon, AlertModal, GlobalProgress, PromptDialog, MdcInputmaskCustomAttribute, EnhanceMask
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

};
