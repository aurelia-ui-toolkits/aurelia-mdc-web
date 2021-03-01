import basicHtml from '!!raw-loader!./basic/basic.html';
import basicCode from '!!raw-loader!./basic/basic';
import functionHtml from '!!raw-loader!./function/function.html';
import functionCode from '!!raw-loader!./function/function';
import objectsHtml from '!!raw-loader!./objects/objects.html';
import objectsCode from '!!raw-loader!./objects/objects';
import validationHtml from '!!raw-loader!./validation/validation.html';
import validationCode from '!!raw-loader!./validation/validation';

import { Basic } from './basic/basic';
import { Function } from './function/function';
import { Objects } from './objects/objects';
import { Validation } from './validation/validation';

export class LookupExamples {
  basicHtml = basicHtml;
  basicCode = basicCode;
  functionHtml = functionHtml;
  functionCode = functionCode;
  objectsHtml = objectsHtml;
  objectsCode = objectsCode;
  validationHtml = validationHtml;
  validationCode = validationCode;

  basic = Basic;
  function = Function;
  objects = Objects;
  validation = Validation;
}