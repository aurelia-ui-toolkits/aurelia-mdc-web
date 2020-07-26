/* eslint-disable no-empty */
import { customElement, bindable, Loader, TaskQueue } from 'aurelia-framework';
import { Highlight } from 'src/attributes/highlight';

interface ITab {
  label: string;
  language: string;
  code: string;
}

@customElement('example-viewer')
export class ExampleViewer {
  constructor(private loader: Loader, private taskQueue: TaskQueue) { }

  tabs: ITab[] = [];
  selectedTab: ITab;
  open: boolean;

  @bindable
  name: string;
  async nameChanged() {
    try {
      const html = await import(`!!raw-loader!views/${this.name}.html`);
      this.tabs.push({ label: 'HTML', language: 'html', code: html.default });
    } catch { }
    try {
      const sass = await import(`!!raw-loader!views/${this.name}.scss`);
      this.tabs.push({ label: 'SASS', language: 'sass', code: sass.default });
    } catch { }
  }

  highlightVM: Highlight;

  toggle() {
    this.open = !this.open;
  }

  select(t: ITab) {
    this.selectedTab = t;
    this.taskQueue.queueTask(() => { this.highlightVM.attached(); });
  }
}
