import { autoinject } from 'aurelia-framework';

@autoinject
export class ObjectsBinding {
  pets = [{ id: 1, name: 'Cat' }, { id: 2, name: 'Dog' }];

  addOption() {
    this.pets.push({ id: 3, name: 'Fish' });
  }

  removeOption() {
    this.pets.pop();
  }
}
