import { booleanAttr, defaultSlotProcessContent, MdcComponent, MdcFocusTrap } from '@aurelia-mdc-web/base';
import { CloseReason, events, MDCBannerActionEventDetail, MDCBannerAdapter, MDCBannerCloseEventDetail, MDCBannerFoundation } from '@material/banner';
import { inject, customElement, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import template from './mdc-banner.html';

events.CLOSED = events.CLOSED.toLowerCase();
events.CLOSING = events.CLOSING.toLowerCase();
events.OPENED = events.OPENED.toLowerCase();
events.OPENING = events.OPENING.toLowerCase();

/**
 * @selector mdc-banner
 */
@inject(Element)
@customElement({ name: 'mdc-banner', template })
@processContent(defaultSlotProcessContent)
export class MdcBanner extends MdcComponent<MDCBannerFoundation> {
  private contentEl: HTMLElement;
  private mdcFocusTrap: MdcFocusTrap;

  /** When used below top app bars, banners should remain fixed at the top of the screen */
  @bindable({ set: booleanAttr })
  fixed: boolean;

  /** Displayed banner centered, optional */
  @bindable({ set: booleanAttr })
  centered: boolean;

  /** Sets banner icon */
  @bindable
  icon: string;

  /** Sets the banner primary action text */
  @bindable
  primaryAction: string;

  /** Sets the banner secondary action text */
  @bindable
  secondaryAction: string;

  @bindable({ set: booleanAttr })
  disablePrimaryAutoClose: boolean;

  @bindable({ set: booleanAttr })
  disableSecondaryAutoClose: boolean;

  handlePrimaryActionClick() {
    this.foundation?.handlePrimaryActionClick(this.disablePrimaryAutoClose);
  }

  handleSecondaryActionClick() {
    this.foundation?.handleSecondaryActionClick(this.disableSecondaryAutoClose);
  }

  /**
   * Opens the banner and fires events.OPENING to indicate the beginning of its
   * opening animation and then events.OPENED once the animation finishes.
   */
  open() {
    this.foundation?.open();
  }

  /**
   * Closes the banner and fires events.CLOSING to indicate the beginning of its
   * closing animation and then events.CLOSED once the animation finishes.
   * @param reason Why the banner was closed. Value will be passed to
   *     events.CLOSING and events.CLOSED via the `event.detail.reason`
   *     property. Standard values are CloseReason.PRIMARY and
   *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
   *     custom handling of programmatic closing of the banner.
   */
  close(reason: CloseReason) {
    this.foundation?.close(reason);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCBannerAdapter = {
      addClass: (className) => {
        this.root.classList.add(className);
      },
      getContentHeight: () => {
        return this.contentEl.offsetHeight;
      },
      notifyClosed: (reason) => {
        this.emit<MDCBannerCloseEventDetail>(events.CLOSED, { reason });
      },
      notifyClosing: (reason) => {
        this.emit<MDCBannerCloseEventDetail>(events.CLOSING, { reason });
      },
      notifyOpened: () => {
        this.emit(events.OPENED, {});
      },
      notifyOpening: () => {
        this.emit(events.OPENING, {});
      },
      notifyActionClicked: (action) => {
        this.emit<MDCBannerActionEventDetail>(events.ACTION_CLICKED, { action });
      },
      releaseFocus: () => {
        this.mdcFocusTrap?.releaseFocus();
      },
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      setStyleProperty: (propertyName, value) => {
        this.root.style.setProperty(propertyName, value);
      },
      trapFocus: () => {
        this.mdcFocusTrap?.trapFocus();
      },
    };
    return new MDCBannerFoundation(adapter);
  }
}
