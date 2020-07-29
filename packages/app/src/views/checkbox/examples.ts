import defaultHtml from '!!raw-loader!./default.html';
import indeterminateHtml from '!!raw-loader!./indeterminate.html';
import labelHtml from '!!raw-loader!./label.html';
import themeHtml from '!!raw-loader!./theme.html';
import themeSass from '!!raw-loader!./theme.scss';

export class Examples {
  defaultHtml = defaultHtml;
  indeterminateHtml = indeterminateHtml;
  labelHtml = labelHtml;
  themeHtml = themeHtml;
  themeSass = themeSass;

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
