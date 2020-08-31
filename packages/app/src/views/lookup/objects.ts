interface IOption {
  id: number;
  name: string;
}

export class Examples {
  options: IOption[] = Array.from({ length: 20 }, (x, i) => ({ id: i, name: `option ${i}` }));
  objectsValue: IOption;
}
