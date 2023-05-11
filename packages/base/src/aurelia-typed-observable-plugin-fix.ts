import { coerceFunctions, createTypedBindable } from 'aurelia-typed-observable-plugin';

coerceFunctions.none = function (a) {
  return a;
}

createTypedBindable('none');
