export class Examples {
  options = [{ id: 1, name: 'Cats' }, { id: 2, name: 'Dogs' }];
  value = this.options[1];

  addOption() {
    this.options.push({ id: 3, name: 'Fish' });
  }

  removeOption() {
    this.options.pop();
  }
}
