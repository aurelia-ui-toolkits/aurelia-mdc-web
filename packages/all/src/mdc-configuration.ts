import { MdcAlertConfiguration } from './alert/alert-configuration';
import { MdcDefaultLookupConfiguration } from './lookup/mdc-lookup-configuration';
import { MdcDefaultSelectConfiguration } from './select/mdc-default-select-configuration';
import { MdcDefaultTextFieldConfiguration } from './text-field/mdc-default-text-field-configuration';
import { MdcDefaultTooltipConfiguration } from './tooltip/mdc-default-tooltip-configuration';

export class MdcConfiguration {
  lookup: MdcDefaultLookupConfiguration = new MdcDefaultLookupConfiguration();
  select: MdcDefaultSelectConfiguration = new MdcDefaultSelectConfiguration();
  textField: MdcDefaultTextFieldConfiguration = new MdcDefaultTextFieldConfiguration();
  tooltip: MdcDefaultTooltipConfiguration = new MdcDefaultTooltipConfiguration();
  alert: MdcAlertConfiguration = new MdcAlertConfiguration();
}

