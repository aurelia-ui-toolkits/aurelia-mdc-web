import basicHtml from '!!raw-loader!./basic.html';
import customHtml from '!!raw-loader!./custom.html';
import customScss from '!!raw-loader!./custom.scss';
import themeHtml from '!!raw-loader!./theme.html';
import themeScss from '!!raw-loader!./theme.scss';

export class Examples {
  basicHtml = basicHtml;
  customHtml = customHtml;
  customScss = customScss;
  themeHtml = themeHtml;
  themeScss = themeScss;

  checked: boolean = true;

  changeEvent: CustomEvent;

  onChange(evt: CustomEvent): void {
    this.changeEvent = evt;
  }

}
