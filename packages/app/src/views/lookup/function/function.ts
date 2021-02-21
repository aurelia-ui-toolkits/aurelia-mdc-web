interface IOption {
  id: number;
  name: string;
}

export class Function {
  options: IOption[] = Array.from({ length: 20 }, (x, i) => ({ id: i, name: `option ${i}` }));
  value = this.options[1];

  getOptions = async (filter: string, value: unknown): Promise<unknown[]> => {
    if (value) {
      return Promise.resolve([this.options.find(x => x === value)]);
    } else {
      return new Promise(r => setTimeout(() => r(this.options.filter(x => x.name.toUpperCase().includes((filter || '').toUpperCase()))), 3000));
    }
  };
}
