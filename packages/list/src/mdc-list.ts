import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCListFoundation, MDCListAdapter, MDCListActionEventDetail, strings, cssClasses } from '@material/list';
import { inject, useView, customElement } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { closest, matches } from '@material/dom/ponyfill';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-list.html'))
@customElement(cssClasses.ROOT)
export class MdcList extends MdcComponent<MDCListFoundation>{

  cssClasses = cssClasses;

  get listElements(): Element[] {
    return [].slice.call(this.root.querySelectorAll(`.${cssClasses.LIST_ITEM_CLASS}`));
  }

  /**
   * Extracts the primary text from a list item.
   * @param item The list item element.
   * @return The primary text in the element.
   */
  getPrimaryText(item: Element): string {
    const primaryText = item.querySelector(`.${cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS}`);
    if (primaryText) {
      return primaryText.textContent || '';
    }

    const singleLineText = item.querySelector(`.${cssClasses.LIST_ITEM_TEXT_CLASS}`);
    return (singleLineText && singleLineText.textContent) || '';
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCListAdapter = {
      addClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: (index) => {
        const element = this.listElements[index] as HTMLElement | undefined;
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: (index, attr) => this.listElements[index].getAttribute(attr),
      getFocusedElementIndex: () => this.listElements.indexOf(document.activeElement!),
      getListItemCount: () => this.listElements.length,
      getPrimaryTextAtIndex: (index) => this.getPrimaryText(this.listElements[index]),
      hasCheckboxAtIndex: (index) => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: (index) => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: (index) => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector<HTMLInputElement>(strings.CHECKBOX_SELECTOR);
        return toggleEl!.checked;
      },
      isFocusInsideList: () => {
        return this.root !== document.activeElement &&
          this.root.contains(document.activeElement);
      },
      isRootFocused: () => document.activeElement === this.root,
      listItemAtIndexHasClass: (index, className) => this.listElements[index].classList.contains(className),
      notifyAction: (index) => {
        this.emit<MDCListActionEventDetail>(strings.ACTION_EVENT, { index }, /** shouldBubble */ true);
      },
      removeClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: (index, attr, value) => {
        const element = this.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector<HTMLInputElement>(strings.CHECKBOX_RADIO_SELECTOR);
        toggleEl!.checked = isChecked;

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl!.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = this.listElements[listItemIndex];
        const listItemChildren: Element[] =
          [].slice.call(element.querySelectorAll(strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach((el) => el.setAttribute('tabindex', tabIndexValue));
      },
    };
    return new MDCListFoundation(adapter);
  }

  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */
  private getListItemIndex_(evt: Event) {
    const eventTarget = evt.target as Element;
    const nearestParent = closest(eventTarget, `.${cssClasses.LIST_ITEM_CLASS}, .${cssClasses.ROOT}`);

    // Get the index of the element if it is a list item.
    if (nearestParent && matches(nearestParent, `.${cssClasses.LIST_ITEM_CLASS}`)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  }

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  handleFocusInEvent_(evt: FocusEvent) {
    const index = this.getListItemIndex_(evt);
    this.foundation?.handleFocusIn(evt, index);
  }

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  handleFocusOutEvent_(evt: FocusEvent) {
    const index = this.getListItemIndex_(evt);
    this.foundation?.handleFocusOut(evt, index);
  }

  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */
  handleKeydownEvent_(evt: KeyboardEvent) {
    const index = this.getListItemIndex_(evt);
    const target = evt.target as Element;
    this.foundation?.handleKeydown(evt, target.classList.contains(cssClasses.LIST_ITEM_CLASS), index);
  }

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  handleClickEvent_(evt: MouseEvent) {
    const index = this.getListItemIndex_(evt);
    const target = evt.target as Element;

    // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
    const toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
    this.foundation?.handleClick(index, toggleCheckbox);
  }

}
