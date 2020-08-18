import { Corner, DefaultFocusState } from '@material/menu';
import { computedFrom } from 'aurelia-binding';
import { MDCMenuDistance } from '@material/menu-surface';
import basicHtml from '!!raw-loader!./basic.html';
import groupHtml from '!!raw-loader!./group.html';
import groupSvgHtml from '!!raw-loader!./group-svg.html';
import cardHtml from '!!raw-loader!./card.html';
import cardSass from '!!raw-loader!./card.scss';

export class Examples {
  basicHtml = basicHtml;
  groupHtml = groupHtml;
  groupSvgHtml = groupSvgHtml;
  cardHtml = cardHtml;
  cardSass = cardSass;

  corners = Object.values(Corner).filter(x => typeof x === 'string');
  menuSurfaceAnchorCorner = 'BOTTOM_LEFT';

  defaultFocusStates = Object.values(DefaultFocusState).filter(x => typeof x === 'string');
  defaultFocusState = this.defaultFocusStates[1];

  fruits = [
    { label: 'Passionfruit' },
    { label: 'Orange' },
    { label: 'Guava' },
    { label: 'Pitaya' },
    { label: null }, // null label sets a mdc-list-divider
    { label: 'Pinaeapple' },
    { label: 'Mango' },
    { label: 'Papaya' },
    { label: 'Lychee' }
  ];

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

  lastSelection: number;

  quickOpen = false;
  fixed = false;
  wrapFocus = false;
  closeSurfaceOnSelection = true;

  onMenuSelect(event: { index: number; item: string }) {
    this.lastSelection = event.index;
  }

  addFruit(): void {
    this.fruits.push({ label: 'New fruit item' });
  }

}
