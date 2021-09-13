import standardHtml from '!!raw-loader!./standard.html';
import selectionHtml from '!!raw-loader!./selection.html';
import paginationHtml from '!!raw-loader!./pagination.html';
import { autoinject } from 'aurelia-framework';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

export interface MDCDataTableRowSelectionChangedEvent {
  rowIndex: number;
  rowId: string | null;
  selected: boolean;
}

@autoinject
export class Examples {
  constructor(private snackbarService: MdcSnackbarService) { }

  standardHtml = standardHtml;
  selectionHtml = selectionHtml;
  paginationHtml = paginationHtml;
  pageSize = 10;
  activePage = 1;
  busy = false;

  desserts = [
    { checked: false, name: 'Frozen yogurt', calories: 159, carbs: 24, protein: 4, comment: 'Super tasty' },
    { checked: true, name: 'Ice cream sandwich', calories: 237, carbs: 37, protein: 4.3, comment: 'I like ice cream more' },
    { checked: false, name: 'Eclair', calories: 262, carbs: 16, protein: 6, comment: 'New filling flavor' }
  ];

  selectionChangedEvent: MDCDataTableRowSelectionChangedEvent;
  onSelectionChanged(event: MDCDataTableRowSelectionChangedEvent): void {
    this.selectionChangedEvent = { rowId: event.rowId, rowIndex: event.rowIndex, selected: event.selected };
  }

  handleNavigation(type: string) {
    this.snackbarService.open(`navigation type: ${type}`);
  }

}
