import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';
import { CloseReason, MDCBannerCloseEventDetail } from '@material/banner';

export class Inline {
  constructor(private snackbarService: MdcSnackbarService) { }

  bannerClosed(event: CustomEvent<MDCBannerCloseEventDetail>) {
    this.snackbarService.open(`You chose ${CloseReason[event.detail.reason]} action`);
  }
}
