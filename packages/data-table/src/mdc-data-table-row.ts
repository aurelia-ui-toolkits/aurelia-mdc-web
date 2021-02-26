import { customAttribute, inject } from 'aurelia-framework';
import { cssClasses } from '@material/data-table';

/**
 * Required. Marks the table row.
 * @selector [mdc-data-table-row]
 */
@customAttribute('mdc-data-table-row')
@inject(Element)
export class MdcDataTableRow {
  constructor(private root: HTMLTableRowElement) { }

  attached() {
    this.root.classList.add(cssClasses.ROW);
    const cells = this.root.querySelectorAll<HTMLElement>('th,td');
    for (const cell of Array.from(cells)) {
      cell.classList.add(cssClasses.CELL);
      cell.classList.toggle(cssClasses.CELL_NUMERIC, cell.hasAttribute('numeric'));
      if (cell.tagName === 'TH') {
        cell.setAttribute('scope', 'row');
      }
    }
  }
}
