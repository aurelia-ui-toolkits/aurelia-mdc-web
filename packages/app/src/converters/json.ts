import { valueConverter } from 'aurelia';

@valueConverter('json')
export class JsonValueConverter {
  toView(value: unknown) {
    return JSON.stringify(value);
  }
}
