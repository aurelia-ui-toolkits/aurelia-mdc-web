import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCDialogFoundation, strings, MDCDialogAdapter, util, MDCDialogCloseEventDetail } from '@material/dialog';
import { MdcDialogContent } from './mdc-dialog-content';
import { FocusTrap } from '@material/dom/focus-trap';
import { child, customElement, useView, inject, View, PLATFORM } from 'aurelia-framework';
import { closest, matches } from '@material/dom/ponyfill';
import { bindable } from 'aurelia-typed-observable-plugin';

const LAYOUT_EVENTS = ['resize', 'orientationchange'];
let dialogId = 0;

strings.OPENING_EVENT = strings.OPENING_EVENT.toLowerCase();
strings.CLOSING_EVENT = strings.CLOSING_EVENT.toLowerCase();
strings.OPENED_EVENT = strings.OPENED_EVENT.toLowerCase();

/**
 * @selector mdc-dialog
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-dialog.html'))
@customElement('mdc-dialog')
export class MdcDialog extends MdcComponent<MDCDialogFoundation> implements EventListenerObject {

  id = ++dialogId;
  contentId = `mdc-dialog-content-${this.id}`;
  titleId = `mdc-dialog-title-${this.id}`;
  private buttons_!: HTMLElement[]; // assigned in initialize()
  focusTrap_!: FocusTrap | undefined; // assigned in initialSyncWithDOM()

  @child('mdc-dialog-content')
  content_?: MdcDialogContent; // assigned in initialize()

  /** Action returned when the dialog is closed via the scrim click */
  @bindable
  scrimClickAction: string;
  async scrimClickActionChanged() {
    await this.initialised;
    this.foundation?.setScrimClickAction(this.scrimClickAction);
  }

  /** Action returned when the dialog is closed via the ESC key */
  @bindable
  escapeKeyAction: string;
  async escapeKeyActionChanged() {
    await this.initialised;
    this.foundation?.setEscapeKeyAction(this.escapeKeyAction);
  }

  @bindable.booleanAttr
  delayFocusTrap: boolean;

  get defaultButton_(): HTMLElement | null {
    return this.root.querySelector<HTMLElement>(`[${strings.BUTTON_DEFAULT_ATTRIBUTE}]`);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    if (!this.delayFocusTrap) {
      this.focusTrap_ = util.createFocusTrapInstance(this.root, (el, focusOptions) => new FocusTrap(el, focusOptions));
    }

    this.buttons_ = [].slice.call(this.root.querySelectorAll<HTMLElement>(strings.BUTTON_SELECTOR));
    const content = this.root.querySelector('mdc-dialog-content');
    content?.setAttribute('id', this.contentId);
    const title = this.root.querySelector('mdc-dialog-title');
    title?.setAttribute('id', this.titleId);
  }

  createFocusTrap() {
    this.focusTrap_ = util.createFocusTrapInstance(this.root, (el, focusOptions) => new FocusTrap(el, focusOptions));
  }

  destroy() {
    this.handleClosing_();
    super.destroy();
  }

  handleClick_(evt: MouseEvent) {
    this.foundation?.handleClick(evt);
    return true;
  }

  handleKeydown_(evt: KeyboardEvent) {
    this.foundation?.handleKeydown(evt);
    return true;
  }

  handleEvent(evt: Event): void {
    switch (evt.currentTarget) {
      case window:
        switch (evt.type) {
          case 'resize':
          case 'orientationchange': this.foundation?.layout(); break;
        }
        break;
      case document:
        switch (evt.type) {
          case 'keydown': this.foundation?.handleDocumentKeydown(evt as KeyboardEvent); break;
        }
        break;
    }
  }

  handleOpening_() {
    LAYOUT_EVENTS.forEach((evtType) => window.addEventListener(evtType, this));
    document.addEventListener('keydown', this);
  }

  handleClosing_() {
    LAYOUT_EVENTS.forEach((evtType) => window.removeEventListener(evtType, this));
    document.removeEventListener('keydown', this);
  }

  /** Opens the dialog */
  open() {
    this.foundation?.open();
  }

  /**
   * Closes the dialog
   * @param action Action to close the dialog with
   */
  close(action = '') {
    this.foundation?.close(action);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCDialogAdapter = {
      addBodyClass: (className) => document.body.classList.add(className),
      addClass: (className) => this.root.classList.add(className),
      areButtonsStacked: () => util.areTopsMisaligned(this.buttons_),
      clickDefaultButton: () => this.defaultButton_?.click(),
      eventTargetMatches: (target, selector) => target ? matches(target as Element, selector) : false,
      getActionFromEvent: (evt: Event) => {
        if (!evt.target) {
          return '';
        }
        const element = closest(evt.target as Element, `[${strings.ACTION_ATTRIBUTE}]`);
        return element?.getAttribute(strings.ACTION_ATTRIBUTE) ?? null;
      },
      getInitialFocusEl: () => this.getInitialFocusEl_(),
      hasClass: (className) => this.root.classList.contains(className),
      isContentScrollable: () => util.isScrollable(this.content_?.root ?? null),
      notifyClosed: (action) => this.emit<MDCDialogCloseEventDetail>(strings.CLOSED_EVENT, action ? { action } : {}),
      notifyClosing: (action) => this.emit<MDCDialogCloseEventDetail>(strings.CLOSING_EVENT, action ? { action } : {}),
      notifyOpened: () => this.emit(strings.OPENED_EVENT, {}),
      notifyOpening: () => this.emit(strings.OPENING_EVENT, {}),
      releaseFocus: () => this.focusTrap_?.releaseFocus(),
      removeBodyClass: (className) => document.body.classList.remove(className),
      removeClass: (className) => this.root.classList.remove(className),
      reverseButtons: () => {
        this.buttons_.reverse();
        this.buttons_.forEach((button) => {
          button.parentElement!.appendChild(button);
        });
      },
      trapFocus: () => this.focusTrap_?.trapFocus(),
    };
    return new MDCDialogFoundation(adapter);
  }

  private getInitialFocusEl_(): HTMLElement | null {
    return this.root.querySelector(`[${strings.INITIAL_FOCUS_ATTRIBUTE}]`);
  }
}

/** @hidden */
export interface IMdcDialogElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcDialog;
    };
  };
}
