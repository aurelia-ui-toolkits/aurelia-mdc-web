export class Examples {
  checked: boolean = true;

  indeterminate: boolean = true;
  indeterminateToChecked: boolean = true;
  alignEnd: boolean;
  disabled: boolean;
  disableRipple: boolean;
  checked2: boolean = true;

  setIndeterminate() {
    this.indeterminate = true;
  }

  toggle() {
    this.checked2 = !this.checked2;
  }

  toggleIndeterminateToChecked() {
    this.indeterminateToChecked = !this.indeterminateToChecked;
  }

  toggleAlignEnd() {
    this.alignEnd = !this.alignEnd;
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleDisableRipple() {
    this.disableRipple = !this.disableRipple;
  }
}
