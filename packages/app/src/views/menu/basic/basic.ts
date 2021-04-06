import { DefaultFocusState, Corner } from '@material/menu';
import { MDCMenuDistance } from '@material/menu-surface';

export class Basic {
  corners = Object.values(Corner).filter(x => typeof x === 'string');
  anchorCorner = 'BOTTOM_LEFT';

  defaultFocusStates = Object.values(DefaultFocusState).filter(x => typeof x === 'string');
  defaultFocusState = this.defaultFocusStates[1];

  fruits = [
    { label: 'Passionfruit' },
    { label: 'Orange' },
    { label: 'Guava' },
    { label: 'Pitaya' },
    { label: null }, // null label sets a mdc-list-divider
    { label: 'Pineapple' },
    { label: 'Mango' },
    { label: 'Papaya' },
    { label: 'Lychee' }
  ];

  marginTop: string = '0';
  marginBottom: string = '0';
  marginLeft: string = '0';
  marginRight: string = '0';

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
  stayOpenOnSelection = false;

  onMenuSelect(event: { index: number; item: string }) {
    this.lastSelection = event.index;
  }

  addFruit(): void {
    this.fruits.push({ label: 'New fruit item' });
  }

}
