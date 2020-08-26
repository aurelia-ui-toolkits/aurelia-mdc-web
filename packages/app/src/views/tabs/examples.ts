import { MDCTabBarActivatedEvent } from '@material/tab-bar';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';
import { autoinject } from 'aurelia-framework';
import dynamicHtml from '!!raw-loader!./dynamic.html';
import fadingIndicatorHtml from '!!raw-loader!./fading-indicator.html';
import fixedHtml from '!!raw-loader!./fixed.html';
import iconIndicatorHtml from '!!raw-loader!./icon-indicator.html';
import iconIndicatorWithLabelHtml from '!!raw-loader!./icon-indicator-with-label.html';
import iconWithLabelHtml from '!!raw-loader!./icon-with-label.html';
import noInitialSelectionHtml from '!!raw-loader!./no-initial-selection.html';
import noLabelsHtml from '!!raw-loader!./no-labels.html';
import scrollingHtml from '!!raw-loader!./scrolling.html';
import stackedHtml from '!!raw-loader!./stacked.html';

@autoinject
export class Examples {
  constructor(private snackbarService: MdcSnackbarService) { }
  dynamicHtml = dynamicHtml;
  fadingIndicatorHtml = fadingIndicatorHtml;
  fixedHtml = fixedHtml;
  iconIndicatorHtml = iconIndicatorHtml;
  iconIndicatorWithLabelHtml = iconIndicatorWithLabelHtml;
  iconWithLabelHtml = iconWithLabelHtml;
  noInitialSelectionHtml = noInitialSelectionHtml;
  noLabelsHtml = noLabelsHtml;
  scrollingHtml = scrollingHtml;
  stackedHtml = stackedHtml;

  tabs = [
    { label: 'Flights', icon: 'airplanemode_active' },
    { label: 'Hotel', icon: 'hotel' },
    { label: 'Favorites', icon: 'favorite' }
  ];

  scrollingTabs = [
    { label: 'Person', icon: 'person' },
    { label: 'Explore', icon: 'explore' },
    { label: 'Build', icon: 'build' },
    { label: 'Accessibility', icon: 'accessibility' },
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
