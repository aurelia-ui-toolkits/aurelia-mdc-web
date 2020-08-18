import { Corner } from '@material/menu';
import { computedFrom } from 'aurelia-binding';
import { MDCMenuDistance } from '@material/menu-surface';
import basicHtml from '!!raw-loader!./basic.html';
import basicSass from '!!raw-loader!./basic.scss';

export class Examples {
  basicHtml = basicHtml;
  basicSass = basicSass;

  corners = Object.values(Corner).filter(x => typeof x === 'string');
  anchorCorner = 'BOTTOM_LEFT';

  marginTop: string = '0';
  marginBottom: string = '0';
  marginLeft: string = '0';
  marginRight: string = '0';

  @computedFrom('marginTop', 'marginBottom', 'marginLeft', 'marginRight')
  get anchorMargin(): Partial<MDCMenuDistance> {
    return {
      top: this.marginTop ? parseInt(this.marginTop) : undefined,
      bottom: this.marginBottom ? parseInt(this.marginBottom) : undefined,
      left: this.marginLeft ? parseInt(this.marginLeft) : undefined,
      right: this.marginRight ? parseInt(this.marginRight) : undefined
    };
  }

  quickOpen = false;
  fixed = false;

  images = Array.from(Array(2), (x, i) => i);

}
