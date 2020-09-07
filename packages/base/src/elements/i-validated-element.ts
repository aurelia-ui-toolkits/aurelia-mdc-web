/** @hidden */
export interface IValidatedElement extends HTMLElement {
  addError(error: unknown): void;
  removeError(error: unknown): void;
  getErrors(): unknown[];
}
