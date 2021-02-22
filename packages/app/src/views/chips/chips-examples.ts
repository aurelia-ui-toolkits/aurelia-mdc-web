import defaultHtml from '!!raw-loader!./default/default.html';
import choiceHtml from '!!raw-loader!./choice/choice.html';
import choiceLeadingHtml from '!!raw-loader!./choice-leading/choice-leading.html';
import filterHtml from '!!raw-loader!./filter/filter.html';
import filterLeadingHtml from '!!raw-loader!./filter-leading/filter-leading.html';
import inputHtml from '!!raw-loader!./input/input.html';
import inputTrailingActionHtml from '!!raw-loader!./input-trailing-action/input-trailing-action.html';
import filterBindingHtml from '!!raw-loader!./filter-binding/filter-binding.html';
import filterBindingCode from '!!raw-loader!./filter-binding/filter-binding';

import { Default } from './default/default';
import { Choice } from './choice/choice';
import { ChoiceLeading } from './choice-leading/choice-leading';
import { Filter } from './filter/filter';
import { FilterLeading } from './filter-leading/filter-leading';
import { Input } from './input/input';
import { InputTrailingAction } from './input-trailing-action/input-trailing-action';
import { FilterBinding } from './filter-binding/filter-binding';

export class ChipsExamples {
  defaultHtml = defaultHtml;
  choiceHtml = choiceHtml;
  choiceLeadingHtml = choiceLeadingHtml;
  filterHtml = filterHtml;
  filterLeadingHtml = filterLeadingHtml;
  inputHtml = inputHtml;
  inputTrailingActionHtml = inputTrailingActionHtml;
  filterBindingHtml = filterBindingHtml;
  filterBindingCode = filterBindingCode;

  default = Default;
  choice = Choice;
  choiceLeading = ChoiceLeading;
  filter = Filter;
  filterLeading = FilterLeading;
  input = Input;
  inputTrailingAction = InputTrailingAction;
  filterBinding = FilterBinding;
}
