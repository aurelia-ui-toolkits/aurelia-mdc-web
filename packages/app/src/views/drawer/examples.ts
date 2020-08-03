import standardHtml from '!!raw-loader!./standard.html';
import dismissibleHtml from '!!raw-loader!./dismissible.html';
import modalHtml from '!!raw-loader!./modal.html';
import rtlHtml from '!!raw-loader!./rtl.html';
import shapedHtml from '!!raw-loader!./shaped.html';
import shapedSass from '!!raw-loader!./shaped.scss';
import examplesCode from '!!raw-loader!./examples-code';

export class Examples {
  standardHtml = standardHtml;
  dismissibleHtml = dismissibleHtml;
  modalHtml = modalHtml;
  rtlHtml = rtlHtml;
  shapedHtml = shapedHtml;
  shapedSass = shapedSass;
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
