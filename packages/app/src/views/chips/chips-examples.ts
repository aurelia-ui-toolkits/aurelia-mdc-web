import defaultHtml from './default/default.html?raw';
import filterHtml from './filter/filter.html?raw';
import inputHtml from './input/input.html?raw';
import filterBindingHtml from './filter-binding/filter-binding.html?raw';
import filterBindingCode from './filter-binding/filter-binding.ts?raw';

import { Default } from './default/default';
import { Filter } from './filter/filter';
import { Input } from './input/input';
import { FilterBinding } from './filter-binding/filter-binding';

export class ChipsExamples {
  defaultHtml = defaultHtml;
  filterHtml = filterHtml;
  inputHtml = inputHtml;
  filterBindingHtml = filterBindingHtml;
  filterBindingCode = filterBindingCode;

  default = Default;
  filter = Filter;
  input = Input;
  filterBinding = FilterBinding;
}
