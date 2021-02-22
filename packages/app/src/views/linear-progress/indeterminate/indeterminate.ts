export class Indeterminate {
  open: boolean = true;

  alternateColors(input: HTMLElement) {
    const demoInput = 'demo-linear-progress--custom';
    input.classList.toggle(demoInput);
  }
}
