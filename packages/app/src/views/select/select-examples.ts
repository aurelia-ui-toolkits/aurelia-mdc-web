import customHtml from '!!raw-loader!./custom/custom.html?raw';
import customSass from '!!raw-loader!./custom/custom.scss';
import leadingIconHtml from '!!raw-loader!./leading-icon/leading-icon.html?raw';
import noLabelHtml from '!!raw-loader!./no-label/no-label.html?raw';
import objectsBindingHtml from '!!raw-loader!./objects-binding/objects-binding.html?raw';
import standardHtml from '!!raw-loader!./standard/standard.html?raw';
import validationHtml from '!!raw-loader!./validation/validation.html?raw';
import delayedHtml from '!!raw-loader!./delayed/delayed.html?raw';

import customCode from '!!raw-loader!./custom/custom';
import delayedCode from '!!raw-loader!./delayed/delayed';
import objectsBindingCode from '!!raw-loader!./objects-binding/objects-binding';
import validationCode from '!!raw-loader!./validation/validation';

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
