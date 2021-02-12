import standardHtml from '!!raw-loader!./standard/standard.html';
import standardCode from '!!raw-loader!./standard/standard';
import dismissibleHtml from '!!raw-loader!./dismissible/dismissible.html';
import dismissibleCode from '!!raw-loader!./dismissible/dismissible';
import modalHtml from '!!raw-loader!./modal/modal.html';
import modalCode from '!!raw-loader!./modal/modal';
import rtlHtml from '!!raw-loader!./rtl/rtl.html';
import rtlCode from '!!raw-loader!./rtl/rtl';
import shapedHtml from '!!raw-loader!./shaped/shaped.html';
import shapedCode from '!!raw-loader!./shaped/shaped';
import shapedSass from '!!raw-loader!./shaped/shaped.scss';

import { Dismissible } from './dismissible/dismissible';
import { Modal } from './modal/modal';
import { Rtl } from './rtl/rtl';
import { Shaped } from './shaped/shaped';
import { Standard } from './standard/standard';

export class DrawerExamples {
  standardHtml = standardHtml;
  dismissibleHtml = dismissibleHtml;
  dismissibleCode = dismissibleHtml;
  modalHtml = modalHtml;
  modalCode = modalHtml;
  rtlHtml = rtlHtml;
  rtlCode = rtlHtml;
  shapedHtml = shapedHtml;
  shapedCode = shapedHtml;
  shapedSass = shapedSass;
  dismissible = Dismissible;
  modal = Modal;
  rtl = Rtl;
  shaped = Shaped;
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
