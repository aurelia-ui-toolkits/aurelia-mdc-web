import basicHtml from '!!raw-loader!./basic/basic.html';
import columnsHtml from '!!raw-loader!./columns/columns.html';
import basicSass from '!!raw-loader!./basic/basic.scss';
import alignmentHtml from '!!raw-loader!./alignment/alignment.html';
import cellAlignmentHtml from '!!raw-loader!./cell-alignment/cell-alignment.html';
import cellAlignmentSass from '!!raw-loader!./cell-alignment/cell-alignment.scss';

import { Basic } from './basic/basic';
import { Columns } from './columns/columns';
import { Alignment } from './alignment/alignment';
import { CellAlignment } from './cell-alignment/cell-alignment';

export class LayoutGridExamples {
  basicSass = basicSass;
  alignmentHtml = alignmentHtml;
  cellAlignmentHtml = cellAlignmentHtml;
  cellAlignmentSass = cellAlignmentSass;
  basicHtml = basicHtml;
  columnsHtml = columnsHtml;

  basic = Basic;
  columns = Columns;
  alignment = Alignment;
  cellAlignment = CellAlignment;
}
