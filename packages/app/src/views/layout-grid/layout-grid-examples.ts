import basicHtml from './basic/basic.html?raw';
import columnsHtml from './columns/columns.html?raw';
import basicSass from './basic/basic.scss?raw';
import alignmentHtml from './alignment/alignment.html?raw';
import cellAlignmentHtml from './cell-alignment/cell-alignment.html?raw';
import cellAlignmentSass from './cell-alignment/cell-alignment.scss?raw';

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
