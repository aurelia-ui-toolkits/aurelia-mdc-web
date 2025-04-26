// import { ValidationController, ValidationRules, ValidationControllerFactory, Rule } from 'aurelia-validation';

import standardHtml from './standard/standard.html?raw';
import standardScss from './standard/standard.scss?raw';
import iconsHtml from './icons/icons.html?raw';
import counterHtml from './counter/counter.html?raw';
import densityHtml from './density/density.html?raw';
import densityScss from './density/density.scss?raw';
import eventsHtml from './events/events.html?raw';
import noLabelHtml from './no-label/no-label.html?raw';
import numericHtml from './numeric/numeric.html?raw';
import prefixSuffixHtml from './prefix-suffix/prefix-suffix.html?raw';
import prefilledHtml from './prefilled/prefilled.html?raw';
import rtlHtml from './rtl/rtl.html?raw';
import shapeHtml from './shape/shape.html?raw';
import shapeScss from './shape/shape.scss?raw';
import svgIconHtml from './svg-icon/svg-icon.html?raw';
import textareaHtml from './textarea/textarea.html?raw';
import textareaScss from './textarea/textarea.scss?raw';
import typesHtml from './types/types.html?raw';
import validationHtml from './validation/validation.html?raw';
import validationCode from './validation/validation.ts?raw';
import blurOnEnterHtml from './blur-on-enter/blur-on-enter.html?raw';

import { Standard } from './standard/standard';
import { Icons } from './icons/icons';

import { BlurOnEnter } from './blur-on-enter/blur-on-enter';
import { Counter } from './counter/counter';
import { Density } from './density/density';
import { Events } from './events/events';
import { NoLabel } from './no-label/no-label';
import { Numeric } from './numeric/numeric';
import { Prefilled } from './prefilled/prefilled';
import { PrefixSuffix } from './prefix-suffix/prefix-suffix';
import { Rtl } from './rtl/rtl';
import { Shape } from './shape/shape';
import { SvgIcon } from './svg-icon/svg-icon';
import { Textarea } from './textarea/textarea';
import { Types } from './types/types';
import { Validation } from './validation/validation';

export class TextFieldExamples {
  counterHtml = counterHtml;
  densityHtml = densityHtml;
  densityScss = densityScss;
  eventsHtml = eventsHtml;
  iconsHtml = iconsHtml;
  noLabelHtml = noLabelHtml;
  numericHtml = numericHtml;
  prefixSuffixHtml = prefixSuffixHtml;
  prefilledHtml = prefilledHtml;
  rtlHtml = rtlHtml;
  shapeHtml = shapeHtml;
  shapeScss = shapeScss;
  standardHtml = standardHtml;
  standardScss = standardScss;
  svgIconHtml = svgIconHtml;
  textareaHtml = textareaHtml;
  textareaScss = textareaScss;
  typesHtml = typesHtml;
  validationHtml = validationHtml;
  validationCode = validationCode;
  blurOnEnterHtml = blurOnEnterHtml;

  standard = Standard;
  icons = Icons;
  blurOnEnter = BlurOnEnter;
  counter = Counter;
  density = Density;
  events = Events;
  noLabel = NoLabel;
  numeric = Numeric;
  prefilled = Prefilled;
  prefixSuffix = PrefixSuffix;
  rtl = Rtl;
  shape = Shape;
  svgIcon = SvgIcon;
  textarea = Textarea;
  types = Types;
  validation = Validation;

  // validationController: ValidationController;
  // rules: Rule<Examples, unknown>[][];

  // attached() {
  //   this.validationController.addObject(this, this.rules);
  // }

  // async validate() {
  //   const res = await this.validationController.validate();
  //   this.snackbarService.open(`valid: ${JSON.stringify(res.valid)}`);
  // }
}
