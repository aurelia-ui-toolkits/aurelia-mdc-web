import { valueConverter } from 'aurelia-binding';

@valueConverter('json')
export class JsonValueConverter {
  toView(value: unknown) {
    return JSON.stringify(value);
  }
}
