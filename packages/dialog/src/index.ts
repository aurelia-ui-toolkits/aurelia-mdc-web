import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { FocusTrap } from '@material/dom/focus-trap';

export { MdcDialog } from './mdc-dialog';
export { MdcDialogService } from './mdc-dialog-service';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-dialog'),
    PLATFORM.moduleName('./mdc-dialog-actions'),
    PLATFORM.moduleName('./mdc-dialog-title'),
    PLATFORM.moduleName('./mdc-dialog-content')
  ]);
}

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
