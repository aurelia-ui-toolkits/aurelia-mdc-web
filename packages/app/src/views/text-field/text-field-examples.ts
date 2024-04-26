// import { ValidationController, ValidationRules, ValidationControllerFactory, Rule } from 'aurelia-validation';

import standardHtml from '!!raw-loader!./standard/standard.html';
import standardScss from '!!raw-loader!./standard/standard.scss';
import iconsHtml from '!!raw-loader!./icons/icons.html';
import counterHtml from '!!raw-loader!./counter/counter.html';
import densityHtml from '!!raw-loader!./density/density.html';
import densityScss from '!!raw-loader!./density/density.scss';
import eventsHtml from '!!raw-loader!./events/events.html';
import noLabelHtml from '!!raw-loader!./no-label/no-label.html';
import numericHtml from '!!raw-loader!./numeric/numeric.html';
import prefixSuffixHtml from '!!raw-loader!./prefix-suffix/prefix-suffix.html';
import prefilledHtml from '!!raw-loader!./prefilled/prefilled.html';
import rtlHtml from '!!raw-loader!./rtl/rtl.html';
import shapeHtml from '!!raw-loader!./shape/shape.html';
import shapeScss from '!!raw-loader!./shape/shape.scss';
import svgIconHtml from '!!raw-loader!./svg-icon/svg-icon.html';
import textareaHtml from '!!raw-loader!./textarea/textarea.html';
import textareaScss from '!!raw-loader!./textarea/textarea.scss';
import typesHtml from '!!raw-loader!./types/types.html';
import validationHtml from '!!raw-loader!./validation/validation.html';
import validationCode from '!!raw-loader!./validation/validation';
import blurOnEnterHtml from '!!raw-loader!./blur-on-enter/blur-on-enter.html';

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
