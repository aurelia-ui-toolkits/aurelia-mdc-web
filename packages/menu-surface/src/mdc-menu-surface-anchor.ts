import { inject, customAttribute } from 'aurelia-framework';
import { cssClasses } from '@material/menu-surface';

@inject(Element)
@customAttribute('mdc-menu-surface-anchor')
export class MdcMenuSurfaceAnchor {
  constructor(private root: HTMLElement) { }

  afterAttach() {
    this.root.classList.add(cssClasses.ANCHOR);
  }
}
