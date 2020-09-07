import { customElement, inject, useView, PLATFORM, View } from 'aurelia-framework';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCSnackbarFoundation, MDCSnackbarAdapter, util, MDCSnackbarCloseEventDetail, strings } from '@material/snackbar';
import { bindable } from 'aurelia-typed-observable-plugin';

strings.OPENING_EVENT = strings.OPENING_EVENT.toLowerCase();
strings.OPENED_EVENT = strings.OPENED_EVENT.toLowerCase();
strings.CLOSING_EVENT = strings.CLOSING_EVENT.toLowerCase();
strings.CLOSED_EVENT = strings.CLOSED_EVENT.toLowerCase();

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-snackbar.html'))
@customElement('mdc-snackbar')
export class MdcSnackbar extends MdcComponent<MDCSnackbarFoundation> {

  private labelEl_!: Element; // assigned in html

  @bindable
  label: string;

  @bindable
  actions: string[];

  @bindable.booleanAttr
  dismissible: boolean;

  @bindable.booleanAttr
  stacked: boolean;

  @bindable.number
  timeout: number;
  async timeoutChanged() {
    await this.initialised;
    this.foundation?.setTimeoutMs(this.timeout);
  }

  @bindable.booleanAttr
  closeOnEscape: boolean = true;
  async closeOnEscapeChanged() {
    await this.initialised;
    this.foundation?.setCloseOnEscape(this.closeOnEscape);
  }

  @bindable
  classes: string;

  @bindable
  actionClasses: string;

  @bindable
  dismissClasses: string;

  @bindable.booleanAttr
  leading: boolean;

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCSnackbarAdapter = {
      addClass: (className) => this.root.classList.add(className),
      announce: () => util.announce(this.labelEl_),
      notifyClosed: (reason) => this.emit<MDCSnackbarCloseEventDetail>(strings.CLOSED_EVENT, reason ? { reason } : {}),
      notifyClosing: (reason) => this.emit<MDCSnackbarCloseEventDetail>(strings.CLOSING_EVENT, reason ? { reason } : {}),
      notifyOpened: () => this.emit(strings.OPENED_EVENT, {}),
      notifyOpening: () => this.emit(strings.OPENING_EVENT, {}),
      removeClass: (className) => this.root.classList.remove(className),
    };
    return new MDCSnackbarFoundation(adapter);
  }

  open() {
    this.foundation?.open();
  }

  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */
  close(reason = '') {
    this.foundation?.close(reason);
  }

  handleAction(action: string) {
    this.foundation?.close(action);
  }

  handleDismiss() {
    this.close(strings.REASON_DISMISS);
  }

  handleKeyDown(evt: KeyboardEvent) {
    this.foundation?.handleKeyDown(evt);
    return true;
  }

}

/** @hidden */
export interface IMdcSnackbarElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcSnackbar;
    };
  };
}
