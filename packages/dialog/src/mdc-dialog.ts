import { MdcComponent, MdcFocusTrap } from '@aurelia-mdc-web/base';
import { MDCDialogFoundation, strings, MDCDialogAdapter, util, MDCDialogCloseEventDetail } from '@material/dialog';
import { MdcDialogContent } from './mdc-dialog-content';
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
  private buttons!: HTMLElement[]; // assigned in initialize()
  mdcFocusTrap: MdcFocusTrap;

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

  @bindable.booleanAttr
  fullscreen: boolean;

  @bindable.booleanAttr
  sheet: boolean;

  get defaultButton(): HTMLElement | null {
    return this.root.querySelector<HTMLElement>(`[${strings.BUTTON_DEFAULT_ATTRIBUTE}]`);
  }

  get content(): HTMLElement | null {
    return this.root.querySelector<HTMLElement>(`${strings.CONTENT_SELECTOR}`);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    this.buttons = [].slice.call(this.root.querySelectorAll<HTMLElement>(strings.BUTTON_SELECTOR));
    const content = this.root.querySelector('mdc-dialog-content');
    content?.setAttribute('id', this.contentId);
    const title = this.root.querySelector('mdc-dialog-title');
    title?.setAttribute('id', this.titleId);
  }

  createFocusTrap() {
    this.mdcFocusTrap?.create();
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
      areButtonsStacked: () => util.areTopsMisaligned(this.buttons),
      clickDefaultButton: () => {
        if (this.defaultButton) {
          this.defaultButton.click();
        }
      },
      eventTargetMatches: (target, selector) =>
        target ? matches(target as Element, selector) : false,
      getActionFromEvent: (evt: Event) => {
        if (!evt.target) {
          return '';
        }
        const element = closest(evt.target as Element, `[${strings.ACTION_ATTRIBUTE}]`);
        return element?.getAttribute(strings.ACTION_ATTRIBUTE) ?? null;
      },
      getInitialFocusEl: () => this.getInitialFocusEl(),
      hasClass: (className) => this.root.classList.contains(className),
      isContentScrollable: () => util.isScrollable(this.content),
      notifyClosed: (action) => this.emit<MDCDialogCloseEventDetail>(strings.CLOSED_EVENT, action ? { action } : {}),
      notifyClosing: (action) => this.emit<MDCDialogCloseEventDetail>(strings.CLOSING_EVENT, action ? { action } : {}),
      notifyOpened: () => this.emit(strings.OPENED_EVENT, {}),
      notifyOpening: () => this.emit(strings.OPENING_EVENT, {}),
      releaseFocus: () => {
        this.mdcFocusTrap?.releaseFocus();
      },
      removeBodyClass: (className) => document.body.classList.remove(className),
      removeClass: (className) => this.root.classList.remove(className),
      reverseButtons: () => {
        this.buttons.reverse();
        this.buttons.forEach((button) => {
          button.parentElement!.appendChild(button);
        });
      },
      trapFocus: () => {
        this.mdcFocusTrap?.trapFocus();
      },
      registerContentEventHandler: (evt, handler) => {
        if (this.content instanceof HTMLElement) {
          this.content.addEventListener(evt, handler);
        }
      },
      deregisterContentEventHandler: (evt, handler) => {
        if (this.content instanceof HTMLElement) {
          this.content.removeEventListener(evt, handler);
        }
      },
      isScrollableContentAtTop: () => {
        return util.isScrollAtTop(this.content);
      },
      isScrollableContentAtBottom: () => {
        return util.isScrollAtBottom(this.content);
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(evt, handler);
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(evt, handler);
      },
    };
    return new MDCDialogFoundation(adapter);
  }

  getInitialFocusEl = (): HTMLElement | null => {
    return this.root.querySelector(`[${strings.INITIAL_FOCUS_ATTRIBUTE}] input, [${strings.INITIAL_FOCUS_ATTRIBUTE}] .mdc-select__anchor`);
  };
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
