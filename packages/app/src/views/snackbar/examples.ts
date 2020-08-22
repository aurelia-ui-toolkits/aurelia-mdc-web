import { MdcSnackbarService, ISnackbarOptions } from '@aurelia-mdc-web/snackbar';
import { autoinject } from 'aurelia-framework';

import basicHtml from '!!raw-loader!./basic.html';
import basicCode from '!!raw-loader!./basic';
import customHtml from '!!raw-loader!./custom.html';
import customSass from '!!raw-loader!./custom.scss';
import customCode from '!!raw-loader!./custom';
import themeHtml from '!!raw-loader!./theme.html';
import themeSass from '!!raw-loader!./theme.scss';
import themeCode from '!!raw-loader!./theme';

@autoinject
export class Examples {
  constructor(private snackbar: MdcSnackbarService) { }

  basicHtml = basicHtml;
  basicCode = basicCode;
  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;
  themeHtml = themeHtml;
  themeSass = themeSass;
  themeCode = themeCode;

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

  async openCustom(customClasses: ISnackbarOptions) {
    await this.snackbar.open('Can\'t send photo. Retry in 5 seconds.', 'Retry', {
      dismissible: true,
      classes: customClasses.classes,
      actionClasses: customClasses.actionClasses,
      dismissClasses: customClasses.dismissClasses
    });
  }

}
