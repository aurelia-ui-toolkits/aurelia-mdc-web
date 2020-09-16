import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

export interface IColumnsOptions {
  media: string;
  count: number;
  gutterSize: number;
}

let id = 0;

/**
 * @selector mdc-image-list
 */
@useView(PLATFORM.moduleName('./mdc-image-list.html'))
@customElement('mdc-image-list')
export class MdcImageList {
  style: HTMLStyleElement;

  id = `mdc-image-list-${++id}`;

  /** Indicates that this Image List should use the Masonry variant */
  @bindable.booleanAttr
  masonry: boolean;

  /** Indicates that supporting content should be positioned in a scrim overlaying each image (instead of positioned separately under each image) */
  @bindable.booleanAttr
  textProtection: boolean;

  /** Number of columns in the list */
  @bindable
  columns: string | Partial<IColumnsOptions>[];
  columnsChanged() {
    if (!this.columns) {
      return;
    }
    const columns = typeof this.columns === 'string' ? [{ count: parseInt(this.columns) }] : this.columns;
    if (this.masonry) {
      this.style.innerHTML  = columns.filter(x => x.count).reduce((p, c) => {
        p += `${c.media ? `@media (${c.media}) {` : ''}
  #${this.id} {
    column-count: ${c.count};
    column-gap: ${c.gutterSize ?? 4}px;
  }

  #${this.id} .mdc-image-list__item {
    margin-bottom: ${c.gutterSize ?? 4}px;
  }
${c.media ? '}' : ''}`;
        return p;
      }, '');
    } else {
      this.style.innerHTML  = columns.filter(x => x.count).reduce((p, c) => {
        p += `${c.media ? `@media (${c.media}) {` : ''}
  #${this.id} .mdc-image-list__item {
    width: calc(100% / ${c.count} - ${(c.gutterSize ?? 4) + 1 / c.count!}px);
    margin: ${c.gutterSize ?? 4 / 2}px;
  }
${c.media ? '}' : ''}`;
        return p;
      }, '');
    }
  }

  bind() {
    this.columnsChanged();
  }
}
