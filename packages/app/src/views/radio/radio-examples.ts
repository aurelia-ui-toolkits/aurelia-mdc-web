import basicHtml from '!!raw-loader!./basic/basic.html';
import groupHtml from '!!raw-loader!./group/group.html';
import customHtml from '!!raw-loader!./custom/custom.html';
import customSass from '!!raw-loader!./custom/custom.scss';
import setHtml from '!!raw-loader!./set/set.html';
import accessibilityHtml from '!!raw-loader!./accessibility/accessibility.html';

import { Basic } from './basic/basic';
import { Group } from './group/group';
import { Custom } from './custom/custom';
import { Set } from './set/set';
import { Accessibility } from './accessibility/accessibility';

export class RadioExamples {
  basicHtml = basicHtml;
  groupHtml = groupHtml;
  customHtml = customHtml;
  customSass = customSass;
  setHtml = setHtml;
  accessibilityHtml = accessibilityHtml;

  basic = Basic;
  group = Group;
  custom = Custom;
  set = Set;
  accessibility = Accessibility;
}
