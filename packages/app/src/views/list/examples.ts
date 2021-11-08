import customHtml from '!!raw-loader!./custom.html';
import customSass from '!!raw-loader!./custom.scss';
import customCode from './custom.ts.raw';
import disableRippleHtml from '!!raw-loader!./disable-ripple.html';
import singleLineHtml from '!!raw-loader!./single-line.html';
import twoLineHtml from '!!raw-loader!./two-line.html';
import leadingIconHtml from '!!raw-loader!./leading-icon.html';
import trailingIconHtml from '!!raw-loader!./trailing-icon.html';
import leadingTrailingIconHtml from '!!raw-loader!./leading-trailing-icon.html';
import twoLineLeadingTrailingIconHtml from '!!raw-loader!./two-line-leading-trailing-icon.html';
import leadingCheckboxHtml from '!!raw-loader!./leading-checkbox.html';
import trailingCheckboxHtml from '!!raw-loader!./trailing-checkbox.html';
import avatarHtml from '!!raw-loader!./avatar.html';
import groupHtml from '!!raw-loader!./group.html';
import expandableHtml from '!!raw-loader!./expandable.html';

export class Examples {
  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;
  disableRippleHtml = disableRippleHtml;
  singleLineHtml = singleLineHtml;
  twoLineHtml = twoLineHtml;
  leadingIconHtml = leadingIconHtml;
  trailingIconHtml = trailingIconHtml;
  leadingTrailingIconHtml = leadingTrailingIconHtml;
  twoLineLeadingTrailingIconHtml = twoLineLeadingTrailingIconHtml;
  leadingCheckboxHtml = leadingCheckboxHtml;
  trailingCheckboxHtml = trailingCheckboxHtml;
  avatarHtml = avatarHtml;
  groupHtml = groupHtml;
  expandableHtml = expandableHtml;

  items = [
    { label: 'Wi-Fi', icon: 'network_wifi' },
    { label: 'Bluetooth', icon: 'bluetooth' },
    { label: 'Data Usage', icon: 'data_usage' }
  ];

  folders = [
    { name: 'Photos', icon: 'folder', addDate: 'Jan 9, 2015' },
    { name: 'Recipes', icon: 'folder', addDate: 'Jan 17, 2015' },
    { name: 'Work', icon: 'folder', addDate: 'Jan 28, 2015' }
  ];

  files = [
    { name: 'Vacation Itinerary', icon: 'insert_drive_file', addDate: 'Jan 10, 2015' },
    { name: 'Kitchen Remodel', icon: 'insert_drive_file', addDate: 'Jan 20, 2015' }
  ];

}
