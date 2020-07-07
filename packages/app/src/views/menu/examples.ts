import { MdcMenu } from '@aurelia-mdc-web/menu';

export class Examples {
  button: HTMLButtonElement;

  menu: MdcMenu;

  attached() {
    this.button.addEventListener('click', () => {
      this.menu.open = !this.menu.open;
    });
  }

}
