import indeterminateHtml from '!!raw-loader!./indeterminate.html';
import indeterminateSass from '!!raw-loader!./indeterminate.scss';
import determinateHtml from '!!raw-loader!./determinate.html';
import determinateSass from '!!raw-loader!./determinate.scss';

export class Examples {
  indeterminateHtml = indeterminateHtml;
  determinateHtml = determinateHtml;
  indeterminateSass = indeterminateSass;
  determinateSass = determinateSass;

  ipOpen = true;

  alternateColors(input: HTMLElement) {
    const demoInput = 'demo-linear-progress--custom';
    input.classList.toggle(demoInput);
  }

}
