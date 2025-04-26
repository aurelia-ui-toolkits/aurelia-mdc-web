import customHtml from './custom/custom.html?raw';
import customSass from './custom/custom.scss?raw';
import leadingIconHtml from './leading-icon/leading-icon.html?raw';
import noLabelHtml from './no-label/no-label.html?raw';
import objectsBindingHtml from './objects-binding/objects-binding.html?raw';
import standardHtml from './standard/standard.html?raw';
import validationHtml from './validation/validation.html?raw';
import delayedHtml from './delayed/delayed.html?raw';

import customCode from './custom/custom.ts?raw';
import delayedCode from './delayed/delayed.ts?raw';
import objectsBindingCode from './objects-binding/objects-binding.ts?raw';
import validationCode from './validation/validation.ts?raw';

import { Custom } from './custom/custom';
import { LeadingIcon } from './leading-icon/leading-icon';
import { NoLabel } from './no-label/no-label';
import { ObjectsBinding } from './objects-binding/objects-binding';
import { Standard } from './standard/standard';
import { Validation } from './validation/validation';
import { Delayed } from './delayed/delayed';

export class SelectExamples {
  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;
  leadingIconHtml = leadingIconHtml;
  noLabelHtml = noLabelHtml;
  objectsBindingHtml = objectsBindingHtml;
  objectsBindingCode = objectsBindingCode;
  selectHtml = standardHtml;
  validationHtml = validationHtml;
  validationCode = validationCode;
  delayedHtml = delayedHtml;
  delayedCode = delayedCode;

  custom = Custom;
  leadingIcon = LeadingIcon;
  noLabel = NoLabel;
  objectsBinding = ObjectsBinding;
  standard = Standard;
  validation = Validation;
  delayed = Delayed;
}
