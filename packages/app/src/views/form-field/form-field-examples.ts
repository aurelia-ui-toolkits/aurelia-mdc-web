import checkboxHtml from './checkbox/checkbox.html?raw';
import nowrapHtml from './nowrap/nowrap.html?raw';
import radioHtml from './radio/radio.html?raw';
import spaceBetweenHtml from './space-between/space-between.html?raw';
import switchHtml from './switch/switch.html?raw';

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
