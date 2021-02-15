export class Standard {
  disabled: boolean;
  required: boolean;
  readonly: boolean;
  outlined: boolean;

  alternateColors(input: HTMLElement) {
    if (input.hasAttribute('textarea')) {
      input.classList.toggle('demo-textarea');
    } else {
      input.classList.toggle('demo-text-field-custom-colors');
    }
  }
}
