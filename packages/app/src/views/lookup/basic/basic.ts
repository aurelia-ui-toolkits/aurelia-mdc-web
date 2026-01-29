export class Basic {
  options: string[];
  value: string = 'option 5';

  attached() {
    new Promise<void>(resolve => setTimeout(() => resolve(), 3000)).then(() => {
      this.options = Array.from({ length: 20 }, (x, i) => (`option ${i}`))
    });
  }
}
