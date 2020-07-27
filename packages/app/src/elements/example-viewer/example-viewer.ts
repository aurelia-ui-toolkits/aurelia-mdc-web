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
  html: string;

  @bindable
  sass: string;

  highlightVM: Highlight;

  bind() {
    this.tabs.push({ label: 'HTML', language: 'html', code: this.html });
    this.tabs.push({ label: 'SASS', language: 'scss', code: this.sass });
    this.selectedTab = this.tabs[0];
  }

  toggle() {
    this.open = !this.open;
  }

  select(t: ITab) {
    this.selectedTab = t;
    this.taskQueue.queueTask(() => { this.highlightVM.attached(); });
  }

  copyCode(): void {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.id = 'txt';
    tempTextarea.style.position = 'fixed';
    tempTextarea.style.top = '0';
    tempTextarea.style.left = '0';
    tempTextarea.style.opacity = '0';
    tempTextarea.textContent = this.selectedTab.code;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();

    try {
      const returnValue = document.execCommand('copy');
      // if (returnValue) {
      //   this.snackbar.open('Code copied');
      // }
    } catch (err) {
      // this.snackbar.open('Unable to copy');
    } finally {
      document.body.removeChild(tempTextarea);
    }
  }

}
