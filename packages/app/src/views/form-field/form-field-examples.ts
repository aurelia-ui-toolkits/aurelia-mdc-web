import checkboxHtml from '!!raw-loader!./checkbox/checkbox.html?raw';
import nowrapHtml from '!!raw-loader!./nowrap/nowrap.html?raw';
import radioHtml from '!!raw-loader!./radio/radio.html?raw';
import spaceBetweenHtml from '!!raw-loader!./space-between/space-between.html?raw';
import switchHtml from '!!raw-loader!./switch/switch.html?raw';

import { Checkbox } from './checkbox/checkbox';
import { Nowrap } from './nowrap/nowrap';
import { Radio } from './radio/radio';
import { SpaceBetween } from './space-between/space-between';
import { Switch } from './switch/switch';

export class FormFieldExamples {
  checkboxHtml = checkboxHtml;
  nowrapHtml = nowrapHtml;
  radioHtml = radioHtml;
  spaceBetweenHtml = spaceBetweenHtml;
  switchHtml = switchHtml;
  checkbox = Checkbox;
  nowrap = Nowrap;
  radio = Radio;
  spaceBetween = SpaceBetween;
  switch = Switch;
}
