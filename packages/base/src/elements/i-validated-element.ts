/** @hidden */
export interface IError {
  message: string | undefined;
}

/** @hidden */
export interface IValidatedElement extends HTMLElement {
  addError(error: IError): void;
  removeError(error: IError): void;
  renderErrors(): void;
}
