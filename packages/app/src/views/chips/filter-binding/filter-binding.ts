interface IChip {
  label: string;
  selected?: boolean;
}

export class FilterBinding {
  chips: IChip[] = [{ label: 'One', selected: true }, { label: 'Two' }, { label: 'Three' }];
  newChip: string;

  add() {
    this.chips.push({ label: this.newChip });
    this.newChip = '';
  }

  removed(data: IChip) {
    this.chips.splice(this.chips.indexOf(data), 1);
  }
}
