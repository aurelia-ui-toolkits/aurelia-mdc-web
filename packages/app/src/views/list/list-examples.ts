import customHtml from '!!raw-loader!./custom.html';
import customSass from '!!raw-loader!./custom.scss';
import customCode from '!!raw-loader!./custom';
import disableRippleHtml from '!!raw-loader!./disable-ripple.html';
import shapedHtml from '!!raw-loader!./shaped.html';
import shapedSass from '!!raw-loader!./shaped.scss';
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

import * as avatar from './avatar.html';
import * as custom from './custom.html';
import * as disableRipple from './disable-ripple.html';
import * as expandable from './expandable.html';
import * as group from './group.html';
import * as leadingCheckbox from './leading-checkbox.html';
import * as leadingIcon from './leading-icon.html';
import * as leadingTrailingIcon from './leading-trailing-icon.html';
import * as shaped from './shaped.html';
import * as singleLine from './single-line.html';
import * as trailingCeckbox from './trailing-checkbox.html';
import * as trailingIcon from './trailing-icon.html';
import * as twoLine from './two-line.html';
import * as twoLineLeadingTrailingIcon from './two-line-leading-trailing-icon.html';

export class ListExamples {
  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;
  disableRippleHtml = disableRippleHtml;
  shapedHtml = shapedHtml;
  shapedSass = shapedSass;
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

  avatar = avatar;
  custom = custom;
  disableRipple = disableRipple;
  expandable = expandable;
  group = group;
  leadingCheckbox = leadingCheckbox;
  leadingIcon = leadingIcon;
  leadingTrailingIcon = leadingTrailingIcon;
  shaped = shaped;
  singleLine = singleLine;
  trailingCeckbox = trailingCeckbox;
  trailingIcon = trailingIcon;
  twoLine = twoLine;
  twoLineLeadingTrailingIcon = twoLineLeadingTrailingIcon;

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
