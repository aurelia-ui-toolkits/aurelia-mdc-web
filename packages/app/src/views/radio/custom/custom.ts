export class Custom {
  alignEnd: boolean;
  disabled: boolean;

  alternateColors(input: HTMLElement) {
    const demoInput = 'demo-radio--custom';
    input.classList.toggle(demoInput);
  }
}
