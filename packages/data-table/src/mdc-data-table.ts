/* eslint-disable no-template-curly-in-string */
import { MdcComponent } from '@aurelia-mdc-web/base';
import {
  MDCDataTableFoundation, selectors, MDCDataTableAdapter, events, cssClasses,
  dataAttributes, MDCDataTableRowSelectionChangedEventDetail, SortValue, messages, RowClickEventData
} from '@material/data-table';
import { MdcCheckbox, IMdcCheckboxElement } from '@aurelia-mdc-web/checkbox';
import { closest } from '@material/dom/ponyfill';
import { inject, customElement, useView, PLATFORM, ViewCompiler, ViewResources, bindingMode, computedFrom, processContent } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

events.ROW_CLICK = events.ROW_CLICK.toLowerCase();
events.ROW_SELECTION_CHANGED = events.ROW_SELECTION_CHANGED.toLowerCase();
events.SELECTED_ALL = events.SELECTED_ALL.toLowerCase();
events.SORTED = events.SORTED.toLowerCase();
events.UNSELECTED_ALL = events.UNSELECTED_ALL.toLowerCase();
const NAVIGATION_EVENT = 'mdcdatatable:navigation';

export interface MDCDataTableColumnsResizedEventDetail {
  widths: string[];
}

/**
 * Use `pagination-total` replaceable part to customise pagination total label.
 * @selector mdc-data-table
 * @emits mdcdatatable:rowselectionchanged | Emitted when row checkbox is checked or unchecked
 * @emits mdcdatatable:selectedall | Emitted when header row checkbox is checked
 * @emits mdcdatatable:unselectedall | Emitted when header row checkbox is unchecked
 * @emits mdcdatatable:sorted | Emitted when clicked on sortable header cell
 * @emits mdcdatatable:rowclick | Emitted when a row is clicked
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-data-table.html'))
@customElement('mdc-data-table')
@processContent(MdcDataTable.processContent)
export class MdcDataTable extends MdcComponent<MDCDataTableFoundation> implements EventListenerObject {
  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element) {
    const table = element.querySelector('table');
    if (!table) {
      throw new Error('Have you forgotten the <table> tag in you data table markup?');
    }
    table.classList.add('mdc-data-table__table');
    table.setAttribute('aria-label', '${ariaLabel}');

    const headerRow = element.querySelector('thead>tr');
    if (!headerRow) {
      throw new Error('Have you forgotten the <thead><tr> tags in you data table markup?');
    }
    headerRow.classList.add(cssClasses.HEADER_ROW);
    headerRow.setAttribute('ref', 'headerRow');
    const headerCells = headerRow.querySelectorAll<HTMLElement>('th');
    for (const th of Array.from(headerCells)) {
      th.classList.add(cssClasses.HEADER_CELL);
      th.classList.toggle('mdc-data-table__header-cell--numeric', th.hasAttribute('numeric'));
      th.setAttribute('role', 'columnheader');
      th.setAttribute('scope', 'col');
    }

    const tbody = element.querySelector('tbody');
    if (!tbody) {
      throw new Error('Have you forgotten the <tbody> tag in you data table markup?');
    }
    tbody.classList.add(cssClasses.CONTENT);
    tbody.setAttribute('ref', 'content');
    return true;
  }

  header: HTMLElement;
  content: HTMLElement;
  columnResized: boolean;
  private mutationObserver: MutationObserver;

  /** Shows pagination footer */
  @bindable.booleanAttr
  pagination: boolean;

  /** Caption for the page size selector */
  @bindable.none
  rowsPerPageLabel: string = 'Rows per page';

  /** Page sizes available for selection, e.g. [10, 25, 100, 'All'] */
  @bindable.none
  pageSizes: unknown[] = [10, 25, 100];

  /** Selected page size */
  @bindable.none({ defaultBindingMode: bindingMode.twoWay })
  pageSize: unknown = 10;

  /** Makes header row sticky (fixed) on vertical scroll.
   * (Note: Sticky header feature is not compatible with IE11 browsers.) */
  @bindable.booleanAttr
  stickyHeader: boolean;

  /** Turns off checkbox handling by the MDC framework */
  @bindable.booleanAttr
  manualCheckboxHandling: boolean;

  /** Turns on automatic column widths saving to localStorage */
  @bindable.booleanAttr
  saveColumnWidths: boolean;

  @computedFrom('pageSize', 'recordsCount', 'activePage')
  get paginationPosition(): 'first' | 'between' | 'last' | undefined {
    if (typeof this.pageSize !== 'number' || this.pageSize === undefined || isNaN(this.activePage) || isNaN(this.recordsCount)) {
      return undefined;
    }
    const pagesCount = Math.ceil(this.recordsCount / this.pageSize);
    return this.activePage === 1
      ? (pagesCount === 1 ? undefined : 'first')
      : (this.activePage === pagesCount ? 'last' : 'between');
  }

  /** Sets total number of records. Used in navigation row. */
  @bindable.number
  recordsCount: number;

  /** Sets the active page number. Used in navigation row. */
  @bindable.number
  activePage: number;

  @computedFrom('pageSize', 'recordsCount', 'activePage')
  get paginationTotal(): string | undefined {
    if (typeof this.pageSize !== 'number' || this.pageSize === undefined || isNaN(this.activePage) || isNaN(this.recordsCount)) {
      return undefined;
    }
    const firstRecord = this.pageSize * (this.activePage - 1) + 1;
    const lastRecord = Math.min(this.pageSize * this.activePage, this.recordsCount);
    return `${firstRecord}-${lastRecord} of ${this.recordsCount}`;
  }

  /** Turns on a linear progress indicator at the top of the table */
  @bindable.booleanAttr
  busy: boolean;
  async busyChanged() {
    await this.initialised;
    if (this.busy) {
      this.foundation?.showProgress();
    } else {
      this.foundation?.hideProgress();
    }
  }

  @bindable.booleanAttr
  hoistPageSelectToBody: boolean;

  get rowCheckboxList(): MdcCheckbox[] {
    return Array.from(this.root.querySelectorAll<IMdcCheckboxElement>('tbody>tr .mdc-checkbox'))
      .map(x => x.au?.controller.viewModel);
  }

  get headerRowCheckbox(): MdcCheckbox | undefined {
    return this.root.querySelector<IMdcCheckboxElement>('thead>tr .mdc-checkbox')?.au.controller.viewModel;
  }

  handleHeaderRowCheckboxChange() {
    this.foundation?.handleHeaderRowCheckboxChange();
  }

  handleRowCheckboxChange(event: Event) {
    if ((event.target as HTMLInputElement).type === 'checkbox') {
      this.foundation?.handleRowCheckboxChange(event);
    }
  }

  headerRowClickListener(event: Event) {
    this.handleHeaderRowClick(event);
  }

  handleNavigationClick(type: 'first' | 'prev' | 'next' | 'last') {
    this.emit(NAVIGATION_EVENT, { type }, true);
  }

  handleContentClick(event: Event) {
    const dataRowEl = closest(event.target as Element, selectors.ROW) as HTMLElement;
    if (!dataRowEl) {
      return;
    }

    this.foundation?.handleRowClick({
      rowId: this.getRowIdByRowElement(dataRowEl),
      row: dataRowEl,
    });
  }

  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   */
  layout() {
    this.foundation?.layout();
  }

  /**
   * @return Returns array of header row cell elements.
   */
  getHeaderCells(): HTMLElement[] {
    return [].slice.call(this.root.querySelectorAll(selectors.HEADER_CELL)) as HTMLElement[];
  }

  /**
   * @return Returns array of row elements.
   */
  getRows(): Element[] {
    return this.foundation!.getRows();
  }

  /**
   * @return Returns array of selected row ids.
   */
  getSelectedRowIds(): (string | null)[] {
    return this.foundation!.getSelectedRowIds();
  }

  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */
  setSelectedRowIds(rowIds: string[]) {
    this.foundation?.setSelectedRowIds(rowIds);
  }

  handleEvent(evt: Event): void {
    switch (evt.currentTarget) {
      case this.header:
        switch (evt.type) {
          case 'change': this.handleHeaderRowCheckboxChange(); break;
          case 'click': this.handleHeaderRowClick(evt); break;
        }
        break;
      case this.content:
        switch (evt.type) {
          case 'change': this.handleRowCheckboxChange(evt); break;
        }
        break;
    }
  }

  async initialise() {
    this.header = this.root.querySelector<HTMLElement>(`.${cssClasses.HEADER_ROW}`)!;
    this.content = this.root.querySelector<HTMLElement>(`.${cssClasses.CONTENT}`)!;
    this.header.addEventListener('click', this);
    this.header.querySelectorAll('th[resizeable]').forEach(x => {
      const resizeHandle = document.createElement('div');
      resizeHandle.addEventListener('mousedown', (event) => this.startColumnResize(event, x as HTMLElement));
      x.insertBefore(document.createElement('div'), x.firstChild).classList.add('mdc-data-table__header-cell__hover-indicator');
      x.appendChild(resizeHandle).classList.add('mdc-data-table__header-cell__resize-handle');
    });
    if (this.saveColumnWidths) {
      this.restoreColumnWidths();
      this.mutationObserver = new MutationObserver(() => this.restoreColumnWidths());
      this.mutationObserver.observe(this.content, { childList: true, subtree: false });
    }

    if (!this.manualCheckboxHandling) {
      this.header.addEventListener('change', this);
      this.content.addEventListener('change', this);
    }

    const rowCheckboxList = this.rowCheckboxList;
    this.rowCheckboxList.forEach(x => x.root.classList.add(cssClasses.ROW_CHECKBOX));
    if (this.headerRowCheckbox) {
      this.headerRowCheckbox.root.classList.add(cssClasses.HEADER_ROW_CHECKBOX);
      rowCheckboxList.push(this.headerRowCheckbox);
    }
    await Promise.all(rowCheckboxList.map(async x => x.initialised));
  }

  public restoreColumnWidths() {
    const widths = JSON.parse(localStorage.getItem(`mdc-data-table-${this.root.id}-column-widths`) ?? '[]');
    this.setColumnWidths(widths);
  }

  initialSyncWithDOM() {
    if (!this.manualCheckboxHandling) {
      const rowCheckboxList = this.rowCheckboxList;
      for (let i = 0; i < rowCheckboxList.length; ++i) {
        if (rowCheckboxList[i].checked) {
          this.getRowByIndex(i).classList.add(cssClasses.ROW_SELECTED);
        }
      }
    }
    this.foundation?.layout();
  }

  private startColumnResize(event: MouseEvent, headerCell: HTMLElement): void {
    this.columnResized = true;
    const startX = event.clientX;
    const resizeHandle = event.target as HTMLElement;
    const initialHandlePosition = resizeHandle.offsetLeft;

    // Create a visual indicator for the resize handle
    const handleIndicator = document.createElement('div');
    handleIndicator.classList.add('mdc-data-table__header-cell__resize-handle-indicator');
    handleIndicator.style.left = `${initialHandlePosition}px`;
    handleIndicator.style.height = `${headerCell.offsetHeight}px`;
    document.body.style.cursor = 'col-resize';
    headerCell.classList.add('mdc-data-table__header-cell--resizing');
    headerCell.appendChild(handleIndicator);

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      handleIndicator.style.left = `${Math.max(initialHandlePosition + deltaX, headerCell.clientLeft)}px`;
    };

    const onMouseUp = () => {
      const finalDeltaX = parseInt(handleIndicator.style.left, 10) - initialHandlePosition;
      const newWidth = Math.max(5, headerCell.offsetWidth + finalDeltaX); // Minimum width of 5px

      // Apply the new width to the column
      headerCell.style.minWidth = headerCell.style.maxWidth = `${newWidth}px`;
      this.content.querySelectorAll(`tr td:nth-child(${Array.from(headerCell.parentElement!.children).indexOf(headerCell) + 1})`)
        .forEach((cell: HTMLElement) => {
          cell.style.minWidth = cell.style.maxWidth = `${newWidth}px`;
        });

      // Clean up
      handleIndicator.remove();
      this.columnResized = false;
      document.body.style.cursor = '';
      headerCell.classList.remove('mdc-data-table__header-cell--resizing');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      // Save the new widths if required
      const widths = this.getHeaderCells().map(x => x.style.minWidth);
      if (this.saveColumnWidths) {
        localStorage.setItem(`mdc-data-table-${this.root.id}-column-widths`, JSON.stringify(widths));
      }

      this.emit<MDCDataTableColumnsResizedEventDetail>('mdcdatatable:columnsresized', { widths }, true);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  destroy() {
    this.header.removeEventListener('change', this);
    this.header.removeEventListener('click', this);
    this.content.removeEventListener('change', this);
    this.mutationObserver?.disconnect();
  }

  public setColumnWidths(widths: string[]) {
    if (!widths || widths.length === 0) {
      return;
    }
    this.getHeaderCells().forEach((x, i) => {
      x.style.minWidth = x.style.maxWidth = widths[i];
      this.content.querySelectorAll(`tr td:nth-child(${i + 1})`).forEach((cell: HTMLElement) => {
        cell.style.minWidth = cell.style.maxWidth = widths[i];
      });
    });
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    const adapter: MDCDataTableAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      getHeaderCellElements: () => this.getHeaderCells(),
      getHeaderCellCount: () => this.getHeaderCells().length,
      getAttributeByHeaderCellIndex: (index, attribute) => this.getHeaderCells()[index].getAttribute(attribute),
      setAttributeByHeaderCellIndex: (index, attribute, value) => this.getHeaderCells()[index].setAttribute(attribute, value),
      setClassNameByHeaderCellIndex: (index, className) => this.getHeaderCells()[index].classList.add(className),
      removeClassNameByHeaderCellIndex: (index, className) => {
        this.getHeaderCells()[index].classList.remove(className);
      },
      notifySortAction: (data) => {
        this.emit(events.SORTED, data, /** shouldBubble */ true);
      },
      getTableContainerHeight: () => {
        const tableContainer =
          this.root.querySelector<HTMLElement>(`.${cssClasses.TABLE_CONTAINER}`);

        if (!tableContainer) {
          throw new Error('MDCDataTable: Table container element not found.');
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
        return tableContainer.getBoundingClientRect().height as any;
      },
      getTableHeaderHeight: () => {
        const tableHeader =
          this.root.querySelector<HTMLElement>(selectors.HEADER_ROW);

        if (!tableHeader) {
          throw new Error('MDCDataTable: Table header element not found.');
        }

        return tableHeader.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (styles) => {
        const progressIndicator = this.root.querySelector<HTMLElement>(selectors.PROGRESS_INDICATOR);

        if (!progressIndicator) {
          throw new Error('MDCDataTable: Progress indicator element not found.');
        }

        Object.assign(progressIndicator.style, styles);
      },
      addClassAtRowIndex: (rowIndex: number, className: string) => {
        this.getRows()[rowIndex].classList.add(className);
      },
      getRowCount: () => this.getRows().length,
      getRowElements: () => [].slice.call(this.root.querySelectorAll(selectors.ROW)) as Element[],
      getRowIdAtIndex: (rowIndex: number) =>
        this.getRows()[rowIndex].getAttribute(dataAttributes.ROW_ID),
      getRowIndexByChildElement: (el: Element) => this.getRows().indexOf((closest(el, selectors.ROW) as HTMLElement)),
      getSelectedRowCount: () => this.root.querySelectorAll(selectors.ROW_SELECTED).length,
      isCheckboxAtRowIndexChecked: (rowIndex: number) => this.rowCheckboxList[rowIndex].checked,
      isHeaderRowCheckboxChecked: () => this.headerRowCheckbox?.checked ?? false,
      isRowsSelectable: () => !!this.root.querySelector(selectors.ROW_CHECKBOX),
      notifyRowSelectionChanged:
        (data: MDCDataTableRowSelectionChangedEventDetail) => {
          this.emit(
            events.ROW_SELECTION_CHANGED, {
            row: this.getRowByIndex(data.rowIndex),
            rowId: this.getRowIdByIndex(data.rowIndex),
            rowIndex: data.rowIndex,
            selected: data.selected,
          }, /** shouldBubble */ true);
        },
      notifySelectedAll: () => {
        this.emit(events.SELECTED_ALL, {}, /** shouldBubble */ true);
      },
      notifyUnselectedAll: () => {
        this.emit(events.UNSELECTED_ALL, {}, /** shouldBubble */ true);
      },
      notifyRowClick: (data: RowClickEventData) => {
        this.emit(events.ROW_CLICK, data, /** shouldBubble */ true);
      },
      registerHeaderRowCheckbox: () => {
        // const checkboxEl = this.root.querySelector<IMdcCheckboxElement>(selectors.HEADER_ROW_CHECKBOX);
        // this.headerRowCheckbox = checkboxEl?.au?.controller.viewModel;
      },
      registerRowCheckboxes: () => {
        // this.rowCheckboxList = [];
        // this.getRows().forEach((rowEl) => {
        //   const checkbox = rowEl.querySelector<IMdcCheckboxElement>(selectors.ROW_CHECKBOX)?.au?.controller.viewModel;
        //   if (checkbox) {
        //     this.rowCheckboxList.push(checkbox);
        //   }
        // });
      },
      removeClassAtRowIndex: (rowIndex: number, className: string) => {
        this.getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex:
        (rowIndex: number, attr: string, value: string) => {
          this.getRows()[rowIndex].setAttribute(attr, value);
        },
      setHeaderRowCheckboxChecked: (checked: boolean) => {
        if (this.headerRowCheckbox) {
          this.headerRowCheckbox.checked = checked;
        }
      },
      setHeaderRowCheckboxIndeterminate: (indeterminate: boolean) => {
        if (this.headerRowCheckbox) {
          this.headerRowCheckbox.indeterminate = indeterminate;
        }
      },
      setRowCheckboxCheckedAtIndex: (rowIndex: number, checked: boolean) => {
        this.rowCheckboxList[rowIndex].checked = checked;
      },
      setSortStatusLabelByHeaderCellIndex: (
        columnIndex: number, sortValue: SortValue) => {
        const headerCell = this.getHeaderCells()[columnIndex];
        const sortStatusLabel =
          headerCell.querySelector<HTMLElement>(selectors.SORT_STATUS_LABEL);

        if (!sortStatusLabel) {
          return;
        }

        sortStatusLabel.textContent =
          this.getSortStatusMessageBySortValue(sortValue);
      }
    };
    return new MDCDataTableFoundation(adapter);
  }

  private getRowByIndex(index: number): Element {
    return this.getRows()[index];
  }

  private getRowIdByIndex(index: number): string | null {
    return this.getRowByIndex(index).getAttribute(dataAttributes.ROW_ID);
  }

  private handleHeaderRowClick(event: Event): void {
    const headerCell =
      closest(event.target as Element, selectors.HEADER_CELL_WITH_SORT) as
      HTMLElement;

    if (!headerCell) {
      return;
    }

    const columnId = headerCell.getAttribute(dataAttributes.COLUMN_ID);
    const columnIndex = this.getHeaderCells().indexOf(headerCell);
    if (columnIndex === -1) {
      return;
    }

    this.foundation?.handleSortAction({ columnId, columnIndex, headerCell });
  }

  private getSortStatusMessageBySortValue(sortValue: SortValue): string {
    switch (sortValue) {
      case SortValue.ASCENDING:
        return messages.SORTED_IN_ASCENDING;
      case SortValue.DESCENDING:
        return messages.SORTED_IN_DESCENDING;
      default:
        return '';
    }
  }

  private getRowIdByRowElement(rowElement: HTMLElement): string | null {
    return rowElement.getAttribute(dataAttributes.ROW_ID);
  }
}
