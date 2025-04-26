import basicHtml from './basic/basic.html?raw';
import basicCode from './basic/basic.ts?raw';
import functionHtml from './function/function.html?raw';
import functionCode from './function/function.ts?raw';
import objectsHtml from './objects/objects.html?raw';
import objectsCode from './objects/objects.ts?raw';
import validationHtml from './validation/validation.html?raw';
import validationCode from './validation/validation.ts?raw';

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
