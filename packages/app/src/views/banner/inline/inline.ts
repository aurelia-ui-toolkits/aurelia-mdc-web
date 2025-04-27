import { MdcSnackbarService } from '@aurelia-mdc-web/all';
import { CloseReason, MDCBannerCloseEventDetail } from '@material/banner';
import { inject } from 'aurelia';

@inject(MdcSnackbarService)
export class Inline {
  constructor(private snackbarService: MdcSnackbarService) { }

  bannerClosed(event: CustomEvent<MDCBannerCloseEventDetail>) {
    this.snackbarService.open(`You chose ${CloseReason[event.detail.reason]} action`);
  }
}
