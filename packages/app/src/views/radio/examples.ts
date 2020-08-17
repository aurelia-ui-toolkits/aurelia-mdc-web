import basicHtml from '!!raw-loader!./basic.html';
import groupHtml from '!!raw-loader!./group.html';
import customHtml from '!!raw-loader!./custom.html';
import customSass from '!!raw-loader!./custom.scss';
import setHtml from '!!raw-loader!./set.html';
import accessibilityHtml from '!!raw-loader!./accessibility.html';

export class Examples {
  basicHtml = basicHtml;
  groupHtml = groupHtml;
  customHtml = customHtml;
  customSass = customSass;
  setHtml = setHtml;
  accessibilityHtml = accessibilityHtml;

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  alternateColors(input: HTMLElement) {
    const demoInput = 'demo-radio--custom';
    input.classList.toggle(demoInput);
  }

}
