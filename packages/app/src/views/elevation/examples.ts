import basicHtml from '!!raw-loader!./basic.html';
import basicCode from '!!raw-loader!./basic';
import basicSass from '!!raw-loader!./basic.scss';

export class Examples {
  basicHtml = basicHtml;
  basicCode = basicCode;
  basicSass = basicSass;

  items = Array.from(Array(25), (x, i) => i);
}
