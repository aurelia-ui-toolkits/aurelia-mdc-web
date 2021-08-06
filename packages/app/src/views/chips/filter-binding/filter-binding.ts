import { MdcChipSet } from '@aurelia-mdc-web/chips';
import { IPlatform, ISignaler, inject } from 'aurelia';

interface IChip {
  label: string;
  selected?: boolean;
}

@inject(ISignaler, IPlatform)
export class FilterBinding {
  constructor(private signaler: ISignaler, private platform: IPlatform) { }

  chips: IChip[] = [{ label: 'One', selected: true }, { label: 'Two' }, { label: 'Three' }];
  newChip: string;
  chipsVm: MdcChipSet;

  add() {
    this.chips.push({ label: this.newChip });
    this.newChip = '';
    this.changed();
    this.platform.taskQueue.queueTask(() => {
      this.chipsVm.foundation?.addChip(this.chips.length - 1);
    });
  }

  removed(detail: { isComplete: boolean; chipIndex: number }) {
    if (detail.isComplete) {
      this.chips.splice(detail.chipIndex, 1);
      this.changed();
    }
  }

  changed() {
    this.signaler.dispatchSignal('chips-updated');
  }
}
