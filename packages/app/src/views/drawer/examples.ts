import standardHtml from '!!raw-loader!./standard.html';
import dismissibleHtml from '!!raw-loader!./dismissible.html';
import modalHtml from '!!raw-loader!./modal.html';
import rtlHtml from '!!raw-loader!./rtl.html';
import examplesCode from './examples-code.ts.raw';

export class Examples {
  standardHtml = standardHtml;
  dismissibleHtml = dismissibleHtml;
  modalHtml = modalHtml;
  rtlHtml = rtlHtml;
  examplesCode = examplesCode;

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
