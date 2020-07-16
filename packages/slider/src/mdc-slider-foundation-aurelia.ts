import { MDCSliderFoundation } from '@material/slider';

// overriding lets the rest of the foundation to always get a fresh bounding rect
// otherwise resizing a container, or moving an element ruins interaction
export class MdcSliderFoundationAurelia extends MDCSliderFoundation {
  get rect_(): ClientRect {
    return this.adapter.computeBoundingRect();
  }

  set rect_(value: ClientRect) {

  }
}
