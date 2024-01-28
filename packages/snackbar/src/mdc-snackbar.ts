import { customElement, inject, bindable } from 'aurelia';
import { MdcComponent, booleanAttr, number } from '@aurelia-mdc-web/base';
import { MDCSnackbarFoundation, MDCSnackbarAdapter, util, MDCSnackbarCloseEventDetail, strings } from '@material/snackbar';
import template from './mdc-snackbar.html';

strings.OPENING_EVENT = strings.OPENING_EVENT.toLowerCase();
strings.OPENED_EVENT = strings.OPENED_EVENT.toLowerCase();
strings.CLOSING_EVENT = strings.CLOSING_EVENT.toLowerCase();
strings.CLOSED_EVENT = strings.CLOSED_EVENT.toLowerCase();

@inject(Element)
@customElement({ name: 'mdc-snackbar', template })
export class MdcSnackbar extends MdcComponent<MDCSnackbarFoundation> {

  private labelEl_!: Element; // assigned in html

  @bindable
  label: string;

  @bindable
  actions: string[];

  @bindable({ set: booleanAttr })
  dismissible: boolean;

  @bindable({ set: booleanAttr })
  stacked: boolean;

  @bindable({ set: number })
  timeout?: number;
  timeoutChanged() {
    if (this.timeout !== undefined && !isNaN(this.timeout)) {
      this.foundation?.setTimeoutMs(this.timeout);
    }
  }

  @bindable({ set: booleanAttr })
  closeOnEscape: boolean = true;
  closeOnEscapeChanged() {
    this.foundation?.setCloseOnEscape(this.closeOnEscape);
  }

  @bindable
  classes: string;

  @bindable
  actionClasses: string;

  @bindable
  dismissClasses: string;

  @bindable({ set: booleanAttr })
  leading: boolean;

  initialSyncWithDOM() {
    this.timeoutChanged();
    this.closeOnEscapeChanged();
  }

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
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcSnackbar;
    };
  };
}
