import { inject, customAttribute } from 'aurelia';
import { cssClasses } from '@material/menu-surface';

@inject(Element)
@customAttribute('mdc-menu-surface-anchor')
export class MdcMenuSurfaceAnchor {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add(cssClasses.ANCHOR);
  }
}
