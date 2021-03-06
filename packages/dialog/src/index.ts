import { IContainer } from 'aurelia';
import { MdcDialog } from './mdc-dialog';
import { MdcDialogActions } from './mdc-dialog-actions';
import { MdcDialogTitle } from './mdc-dialog-title';
import { MdcDialogContent } from './mdc-dialog-content';
import { FocusTrap } from '@material/dom/focus-trap';

export { MdcDialog } from './mdc-dialog';
export { MdcDialogService, IMdcDialogOptions } from './mdc-dialog-service';

export const DialogConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcDialog, MdcDialogActions, MdcDialogTitle, MdcDialogContent);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(FocusTrap.prototype as any).getFocusableElements = function (root: HTMLElement): HTMLElement[] {
  const focusableEls =
    [].slice.call(root.querySelectorAll(
      '[autofocus], [tabindex], a, input, textarea, select, button, .mdc-select__anchor')) as
    HTMLElement[];
  return focusableEls.filter((el) => {
    const isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' ||
      el.getAttribute('disabled') !== null ||
      el.getAttribute('hidden') !== null ||
      el.getAttribute('aria-hidden') === 'true';
    const isTabbableAndVisible = (el.tabIndex >= 0 || el.classList.contains('mdc-select__anchor')) &&
      el.getBoundingClientRect().width > 0 &&
      !el.classList.contains('mdc-dom-focus-sentinel') && !isDisabledOrHidden;

    let isProgrammaticallyHidden = false;
    if (isTabbableAndVisible) {
      const style = getComputedStyle(el);
      isProgrammaticallyHidden =
        style.display === 'none' || style.visibility === 'hidden';
    }
    return isTabbableAndVisible && !isProgrammaticallyHidden;
  });
};
