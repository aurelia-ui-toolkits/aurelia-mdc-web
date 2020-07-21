export class Examples {
  public lookupOptions = Array.from({ length: 20 }, (x, i) => ({ id: i, name: `option ${i}${i === 5 ? ' loooooooooooooong' : ''}` }));
  public lookupValue = this.lookupOptions[1];
}
