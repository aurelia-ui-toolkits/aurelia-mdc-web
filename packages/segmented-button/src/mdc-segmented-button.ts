import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCSegmentedButtonAdapter, MDCSegmentedButtonFoundation, SegmentDetail } from '@material/segmented-button';
import { events } from '@material/segmented-button/segmented-button/constants';
import { inject } from 'aurelia-dependency-injection';
import { PLATFORM } from 'aurelia-pal';
import { children, customElement, useView } from 'aurelia-templating';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcSegmentedButtonSegment } from './mdc-segmented-button-segment/mdc-segmented-button-segment';

/**
 * @selector mdc-segmented-button
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-segmented-button.html'))
@customElement('mdc-segmented-button')
export class MdcSegmentedButton extends MdcComponent<MDCSegmentedButtonFoundation>{

  /** Indicates the segmented button only allows one segment to be selected at a time */
  @bindable.booleanAttr
  single: boolean;
  singleChanged() {
    this.root.setAttribute('role', this.single ? 'radiogroup' : 'group');
  }

  @children('.mdc-segmented-button__segment')
  segmentsList!: MdcSegmentedButtonSegment[];

  initialSyncWithDOM() {
    const isSingleSelect = this.foundation!.isSingleSelect();
    for (let i = 0; i < this.segmentsList.length; i++) {
      const segment = this.segmentsList[i];
      segment.setIndex(i);
      segment.setIsSingleSelect(isSingleSelect);
    }
  }

  handleSelected(event: CustomEvent<SegmentDetail>) {
    this.foundation?.handleSelected(event.detail);
  }

  getDefaultFoundation(): MDCSegmentedButtonFoundation {
    const adapter: MDCSegmentedButtonAdapter = {
      hasClass: (className) => {
        return this.root.classList.contains(className);
      },
      getSegments: () => {
        return this.mappedSegments();
      },
      selectSegment: (indexOrSegmentId) => {
        const segmentDetail = this.mappedSegments().find(
          (detail) => detail.index === indexOrSegmentId ||
            detail.segmentId === indexOrSegmentId);
        if (segmentDetail) {
          this.segmentsList[segmentDetail.index].checked = true;
        }
      },
      unselectSegment: (indexOrSegmentId) => {
        const segmentDetail = this.mappedSegments().find(
          (detail) => detail.index === indexOrSegmentId ||
            detail.segmentId === indexOrSegmentId);
        if (segmentDetail) {
          this.segmentsList[segmentDetail.index].checked = false;
          this.segmentsList[segmentDetail.index].notifySelectedChange('unselected', false);
        }
      },
      notifySelectedChange: (detail) => {
        this.emit<SegmentDetail>(
          events.CHANGE, detail, true /* shouldBubble */
        );
      }
    };
    return new MDCSegmentedButtonFoundation(adapter);
  }

  /**
   * @return Returns child segments mapped to readonly SegmentDetail list
   */
  private mappedSegments(): readonly SegmentDetail[] {
    return this.segmentsList.map(
      (segment: MdcSegmentedButtonSegment, index: number) => {
        return {
          index,
          selected: segment.checked,
          segmentId: segment.getSegmentId()
        };
      });
  }
}
