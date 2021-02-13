import standardHtml from '!!raw-loader!./standard/standard.html';
import selectionHtml from '!!raw-loader!./selection/selection.html';
import paginationHtml from '!!raw-loader!./pagination/pagination.html';

import { Standard } from './standard/standard';
import { Selection } from './selection/selection';
import { Pagination } from './pagination/pagination';

export interface MDCDataTableRowSelectionChangedEvent {
  index: number;
  id: string | null;
  selected: boolean;
}

export class DataTableExamples {
  standardHtml = standardHtml;
  selectionHtml = selectionHtml;
  paginationHtml = paginationHtml;

  standard = Standard;
  selection = Selection;
  pagination = Pagination;
}
