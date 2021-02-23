import { MDCSliderFoundation } from '@material/slider';

// overriding lets the rest of the foundation to always get a fresh bounding rect
// otherwise resizing a container, or moving an element ruins interaction
export class MdcSliderFoundationAurelia extends MDCSliderFoundation {
  get rect(): ClientRect {
    return this.adapter.getBoundingClientRect();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set rect(_: ClientRect) { }
}
