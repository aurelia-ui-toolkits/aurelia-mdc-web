import { ValidationController, ValidationRules, ValidationControllerFactory, Rule } from 'aurelia-validation';
import { autoinject } from 'aurelia-framework';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

import counterHtml from '!!raw-loader!./counter.html';
import densityHtml from '!!raw-loader!./density.html';
import densityScss from '!!raw-loader!./density.scss';
import eventsHtml from '!!raw-loader!./events.html';
import examplesHtml from '!!raw-loader!./examples.html';
import fullwidthHtml from '!!raw-loader!./fullwidth.html';
import iconsHtml from '!!raw-loader!./icons.html';
import noLabelHtml from '!!raw-loader!./no-label.html';
import numericHtml from '!!raw-loader!./numeric.html';
import prefixSuffixHtml from '!!raw-loader!./prefix-suffix.html';
import prefilledHtml from '!!raw-loader!./prefilled.html';
import rtlHtml from '!!raw-loader!./rtl.html';
import shapeHtml from '!!raw-loader!./shape.html';
import shapeScss from '!!raw-loader!./shape.scss';
import standardHtml from '!!raw-loader!./standard.html';
import standardScss from '!!raw-loader!./standard.scss';
import svgIconHtml from '!!raw-loader!./svg-icon.html';
import textareaHtml from '!!raw-loader!./textarea.html';
import textareaScss from '!!raw-loader!./textarea.scss';
import typesHtml from '!!raw-loader!./types.html';
import validationHtml from '!!raw-loader!./validation.html';
import validationCode from '!!raw-loader!./validation';
import blurOnEnterHtml from '!!raw-loader!./blur-on-enter.html';

@autoinject
export class Examples {
  constructor(validationControllerFactory: ValidationControllerFactory, private snackbarService: MdcSnackbarService) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Examples, string>(x => x.valueStr).required()
      .satisfies(x => !x.startsWith('erro')).withMessage('cannot start with "erro"')
      .satisfies(x => !x.startsWith('error')).withMessage('cannot start with "error"')
      .rules;
  }

  counterHtml = counterHtml;
  densityHtml = densityHtml;
  densityScss = densityScss;
  eventsHtml = eventsHtml;
  examplesHtml = examplesHtml;
  fullwidthHtml = fullwidthHtml;
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

  validationController: ValidationController;
  rules: Rule<Examples, unknown>[][];

  value = 0;
  valueStr: string = 'test';

  textareaDisabled: boolean;
  textareaRequired: boolean;

  prefilledText = 'John Doe';

  onInput(): void {
    this.snackbarService.open('input event');
  }

  onChange(): void {
    this.snackbarService.open('change event');
  }

  onFocus(): void {
    this.snackbarService.open('focus event');
  }

  attached() {
    this.validationController.addObject(this, this.rules);
  }

  async validate() {
    const res = await this.validationController.validate();
    this.snackbarService.open(`valid: ${JSON.stringify(res.valid)}`);
  }

  toggleTextareaDisabled() {
    this.textareaDisabled = !this.textareaDisabled;
  }

  toggleTextareaRequired() {
    this.textareaRequired = !this.textareaRequired;
  }

  alternateColors(input: HTMLElement) {
    if (input.hasAttribute('textarea')) {
      input.classList.toggle('demo-textarea');
    } else {
      input.classList.toggle('demo-text-field-custom-colors');
    }
  }

}
