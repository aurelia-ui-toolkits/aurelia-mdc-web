import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCMenuSurfaceFoundation, MDCMenuSurfaceAdapter, cssClasses, Corner, MDCMenuDistance, strings } from '@material/menu-surface';
import { inject, customAttribute, bindable, BindingMode } from 'aurelia';
import { getCorrectPropertyName } from '@material/animation/util';

strings.OPENED_EVENT = strings.OPENED_EVENT.toLowerCase();
strings.CLOSED_EVENT = strings.CLOSED_EVENT.toLowerCase();

@inject(Element)
@customAttribute('mdc-menu-surface')
export class MdcMenuSurface extends MdcComponent<MDCMenuSurfaceFoundation> implements EventListenerObject {
  originalParent: HTMLElement | null;
  private previousFocus?: HTMLElement | SVGElement | null;

  @bindable
  anchor?: Element | null;

  /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */
  @bindable({ set: booleanAttr, mode: BindingMode.oneTime })
  hoistToBody: boolean;

  @bindable({ set: booleanAttr })
  fixed: boolean;
  fixedChanged() {
    if (this.fixed) {
      this.root.classList.add(cssClasses.FIXED);
    } else {
      this.root.classList.remove(cssClasses.FIXED);
    }
    this.foundation?.setFixedPosition(this.fixed);
  }

  @bindable
  anchorCorner?: keyof typeof Corner;
  anchorCornerChanged() {
    if (this.anchorCorner !== undefined) {
      this.foundation?.setAnchorCorner(Corner[this.anchorCorner]);
    }
  }

  @bindable
  anchorMargin?: Partial<MDCMenuDistance>;
  anchorMarginChanged() {
    if (this.anchorMargin !== undefined) {
      this.foundation?.setAnchorMargin(this.anchorMargin);
    }
  }

  @bindable({ set: booleanAttr })
  quickOpen: boolean;
  quickOpenChanged() {
    this.foundation?.setQuickOpen(this.quickOpen);
  }

  @bindable({ set: booleanAttr })
  fullWidth: boolean;
  fullWidthChanged() {
    if (this.fullWidth) {
      this.root.classList.add('mdc-menu-surface--fullwidth');
    } else {
      this.root.classList.remove('mdc-menu-surface--fullwidth');
    }
  }

  @bindable({ set: booleanAttr })
  stayOpen: boolean;

  get open(): boolean {
    return this.foundation!.isOpen();
  }

  set open(value: boolean) {
    if (value) {
      this.foundation?.open();
    } else {
      this.foundation?.close();
    }
  }

  handleKeydown(evt: KeyboardEvent) {
    this.foundation?.handleKeydown(evt);
  }

  handleBodyClick(evt: MouseEvent) {
    if (!this.stayOpen) {
      this.foundation?.handleBodyClick(evt);
    }
  }

  attaching() {
    this.root.classList.add(cssClasses.ROOT);
  }

  handleEvent(evt: Event): void {
    switch (evt.currentTarget) {
      case this.root:
        switch (evt.type) {
          case 'keydown': this.handleKeydown(evt as KeyboardEvent); break;
        }
        break;
      case document.body:
        switch (evt.type) {
          case 'click': this.handleBodyClick(evt as MouseEvent); break;
        }
        break;
    }
  }

  registerBodyClickListener() {
    // this is different to native implementation
    // refer to https://github.com/material-components/material-components-web/issues/6188
    // capture so that no race between handleBodyClick and quickOpen when
    // menusurface opened on button click which registers this listener
    document.body.addEventListener('click', this);
  }

  deregisterBodyClickListener() {
    document.body.removeEventListener('click', this);
  }

  initialSyncWithDOM() {
    this.fixedChanged();
    this.fullWidthChanged();
    this.quickOpenChanged();
    this.anchorCornerChanged();
    this.anchorMarginChanged();

    const parentEl = this.root.parentElement;
    if (!this.anchor) {
      this.anchor = parentEl?.classList.contains(cssClasses.ANCHOR) ? parentEl : null;
    }
    if (this.hoistToBody) {
      this.originalParent = this.root.parentElement;
      if (this.originalParent) {
        document.body.appendChild(this.originalParent.removeChild(this.root));
        this.foundation?.setIsHoisted(true);
      }
    }
    this.foundation?.setFixedPosition(this.fixed);
    if (this.anchorCorner) {
      this.foundation?.setAnchorCorner(Corner[this.anchorCorner]);
    }
    if (this.anchorMargin) {
      this.foundation?.setAnchorMargin(this.anchorMargin);
    }
    this.listen('keydown', this);
  }

  destroy() {
    this.unlisten('keydown', this);
    if (this.originalParent) {
      this.originalParent.appendChild(document.body.removeChild(this.root));
    }
    super.destroy();
  }

  close(skipRestoreFocus = false) {
    this.foundation?.close(skipRestoreFocus);
  }

  /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */
  setAbsolutePosition(x: number, y: number) {
    this.foundation?.setAbsolutePosition(x, y);
    this.hoistToBody = true;
  }

  /**
   * @param corner Default anchor corner alignment of top-left surface corner.
   */
  setAnchorCorner(corner: Corner) {
    this.foundation?.setAnchorCorner(corner);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCMenuSurfaceAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      hasAnchor: () => !!this.anchor,
      notifyClose: () => {
        this.emit(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
        this.deregisterBodyClickListener();
      },
      notifyClosing: () => {
        this.emit(MDCMenuSurfaceFoundation.strings.CLOSING_EVENT, {});
      },
      notifyOpen: () => {
        this.emit(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
        this.registerBodyClickListener();
      },
      isElementInContainer: (el) => this.root.contains(el),
      isRtl: () => getComputedStyle(this.root).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        const propertyName =
          `${getCorrectPropertyName(window, 'transform')}-origin`;
        this.root.style.setProperty(propertyName, origin);
      },
      isFocused: () => document.activeElement === this.root,
      saveFocus: () => {
        this.previousFocus = document.activeElement as HTMLElement | SVGElement | null;
      },
      restoreFocus: () => {
        if (this.root.contains(document.activeElement)) {
          if (this.previousFocus?.focus) {
            this.previousFocus.focus();
          }
        }
      },
      getInnerDimensions: () => {
        return {
          width: this.root.offsetWidth,
          height: this.root.offsetHeight
        };
      },
      getAnchorDimensions: () => this.anchor ? this.anchor.getBoundingClientRect() : null,
      getWindowDimensions: () => {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      getBodyDimensions: () => {
        return { width: document.body.clientWidth, height: document.body.clientHeight };
      },
      getWindowScroll: () => {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      setPosition: (position) => {
        const rootHTML = this.root;
        rootHTML.style.left = 'left' in position ? `${position.left}px` : '';
        rootHTML.style.right = 'right' in position ? `${position.right}px` : '';
        rootHTML.style.top = 'top' in position ? `${position.top}px` : '';
        rootHTML.style.bottom = 'bottom' in position ? `${position.bottom}px` : '';
      },
      setMaxHeight: (height) => {
        (this.root).style.maxHeight = height;
      },
    };
    return new MDCMenuSurfaceFoundation(adapter);
  }

}
