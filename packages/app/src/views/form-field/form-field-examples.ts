import checkboxHtml from '!!raw-loader!./checkbox/checkbox.html';
import nowrapHtml from '!!raw-loader!./nowrap/nowrap.html';
import radioHtml from '!!raw-loader!./radio/radio.html';
import spaceBetweenHtml from '!!raw-loader!./space-between/space-between.html';
import switchHtml from '!!raw-loader!./switch/switch.html';

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
