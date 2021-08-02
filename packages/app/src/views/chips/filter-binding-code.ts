import { autoinject } from 'aurelia-dependency-injection';
import { TaskQueue } from 'aurelia-task-queue';
import { BindingSignaler } from 'aurelia-templating-resources';
import { MdcChipSet } from '@aurelia-mdc-web/chips';

@autoinject
export class FilterBinding {
  constructor(private signaler: BindingSignaler, private taskQueue: TaskQueue) { }

  chips = [{ label: 'One', selected: true }, { label: 'Two' }, { label: 'Three' }];
  newChip: string;
  chipsVm: MdcChipSet;

  add() {
    this.chips.push({ label: this.newChip });
    this.newChip = '';
    this.changed();
    this.taskQueue.queueTask(() => {
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
    this.signaler.signal('chips-updated');
  }
}
