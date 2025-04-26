import standardHtml from './standard/standard.html?raw';
import selectionHtml from './selection/selection.html?raw';
import paginationHtml from './pagination/pagination.html?raw';

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
