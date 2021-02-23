import { MDCTabBarActivatedEvent } from '@material/tab-bar';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

export class Dynamic {
  constructor(private snackbarService: MdcSnackbarService) { }

  useAutomaticActivation: boolean;

  tabs = [
    { label: 'Flights', icon: 'airplanemode_active' },
    { label: 'Hotel', icon: 'hotel' },
    { label: 'Favorites', icon: 'favorite' }
  ];

  logTab(event: MDCTabBarActivatedEvent): void {
    this.snackbarService.open(`event detail: ${JSON.stringify(event.detail)}`);
  }

  addTab(): void {
    this.tabs.push({
      label: 'New Tab',
      icon: 'hotel'
    });
  }
}
