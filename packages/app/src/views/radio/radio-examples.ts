import basicHtml from './basic/basic.html?raw';
import groupHtml from './group/group.html?raw';
import customHtml from './custom/custom.html?raw';
import customSass from './custom/custom.scss?raw';
import setHtml from './set/set.html?raw';
import accessibilityHtml from './accessibility/accessibility.html?raw';

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
