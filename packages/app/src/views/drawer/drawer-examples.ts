import standardHtml from './standard/standard.html?raw';
import standardCode from './standard/standard.ts?raw';
import dismissibleHtml from './dismissible/dismissible.html?raw';
import dismissibleCode from './dismissible/dismissible.ts?raw';
import modalHtml from './modal/modal.html?raw';
import modalCode from './modal/modal.ts?raw';
import rtlHtml from './rtl/rtl.html?raw';
import rtlCode from './rtl/rtl.ts?raw';

import { Dismissible } from './dismissible/dismissible';
import { Modal } from './modal/modal';
import { Rtl } from './rtl/rtl';
import { Standard } from './standard/standard';

export class DrawerExamples {
  standardHtml = standardHtml;
  standardCode = standardCode;
  dismissibleHtml = dismissibleHtml;
  dismissibleCode = dismissibleCode;
  modalHtml = modalHtml;
  modalCode = modalCode;
  rtlHtml = rtlHtml;
  rtlCode = rtlCode;
  dismissible = Dismissible;
  modal = Modal;
  rtl = Rtl;
  standard = Standard;

  destinations = [
    { label: 'Inbox', icon: 'inbox', activated: true },
    { label: 'Star', icon: 'star', activated: false },
    { label: 'Sent Mail', icon: 'send', activated: false },
    { label: 'Drafts', icon: 'drafts', activated: false }
  ];

  alternateColors(input: HTMLElement, className: string) {
    if (input.classList.contains(className)) {
      input.classList.remove(className);
    } else {
      input.classList.add(className);
    }
  }
}
