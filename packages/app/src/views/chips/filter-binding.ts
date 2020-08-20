
export class FilterBinding {
  chips = [{ label: 'One', selected: true }, { label: 'Two' }, { label: 'Three' }];
  newChip: string;

  add() {
    this.chips.push({ label: this.newChip });
    this.newChip = '';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removed(data: any) {
    this.chips.splice(this.chips.indexOf(data), 1);
  }
}
