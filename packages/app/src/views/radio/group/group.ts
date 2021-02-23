export class Group {
  disabled: boolean;

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  alternateColors(input: HTMLElement) {
    const demoInput = 'demo-radio--custom';
    input.classList.toggle(demoInput);
  }

}
