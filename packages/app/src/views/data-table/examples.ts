import standardHtml from '!!raw-loader!./standard.html';
import selectionHtml from '!!raw-loader!./selection.html';
import paginationHtml from '!!raw-loader!./pagination.html';
import { autoinject } from 'aurelia-framework';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

export interface MDCDataTableRowSelectionChangedEvent {
  index: number;
  id: string | null;
  selected: boolean;
}

@autoinject
export class Examples {
  constructor(private snackbarService: MdcSnackbarService) { }

  standardHtml = standardHtml;
  selectionHtml = selectionHtml;
  paginationHtml = paginationHtml;
  activePage = 1;

  desserts = [
    { checked: false, name: 'Frozen yogurt', calories: 159, carbs: 24, protein: 4, comment: 'Super tasty' },
    { checked: true, name: 'Ice cream sandwich', calories: 237, carbs: 37, protein: 4.3, comment: 'I like ice cream more' },
    { checked: false, name: 'Eclair', calories: 262, carbs: 16, protein: 6, comment: 'New filling flavor' }
  ];

  selectionChangedEvent: MDCDataTableRowSelectionChangedEvent;
  onSelectionChanged(event: MDCDataTableRowSelectionChangedEvent): void {
    this.selectionChangedEvent = event;
  }

  handleNavigation(type: string) {
    this.snackbarService.open(`navigation type: ${type}`);
    switch (type) {
      case 'first': this.activePage = 1; break;
      case 'prev': this.activePage--; break;
      case 'next': this.activePage++; break;
      case 'last': this.activePage = 4; break;
    }
  }

}
