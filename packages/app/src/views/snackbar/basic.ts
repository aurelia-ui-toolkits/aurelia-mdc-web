import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Basic {
  constructor(private snackbar: MdcSnackbarService) { }

  async simple() {
    const reason = await this.snackbar.open('Marked as favorite.');
    console.log(`The snack-bar was dismissed: ${reason}`);
  }

  async withAction() {
    const reason = await this.snackbar.open('Can\'t send photo. Retry in 5 seconds.', 'Retry');
    console.log(`The snack-bar was dismissed: ${reason}`);
  }

  async dismissIcon() {
    const reason = await this.snackbar.open('Can\'t send photo. Retry in 5 seconds.', 'Retry', {
      dismissible: true
    });
    console.log(`The snack-bar was dismissed: ${reason}`);
  }

  async dismissIconOnly() {
    await this.snackbar.open('Can\'t send photo. Retry in 5 seconds.', undefined, {
      dismissible: true
    });
  }

  async stacked() {
    const reason = await this.snackbar.open(
      'This item already has the label "travel". You can add a new label.',
      'Add a new label',
      {
        stacked: true,
        dismissible: true
      });
    console.log(`The snack-bar was dismissed: ${reason}`);
  }

  async maxTimeout() {
    const reason = await this.snackbar.open('Can\'t send photo. Retry in 10 seconds.', 'Retry', {
      timeout: 10000
    });
    console.log(`The snack-bar was dismissed: ${reason}`);
  }

  async openLeading() {
    await this.snackbar.open('Can\'t send photo. Retry in 5 seconds.', 'Retry', {
      leading: true
    });
  }
}
