import basicHtml from './basic/basic.html?raw';
import groupHtml from './group/group.html?raw';
import groupSvgHtml from './group-svg/group-svg.html?raw';
import cardHtml from './card/card.html?raw';
import cardSass from './card/card.scss?raw';
import hierarchicalHtml from './hierarchical/hierarchical.html?raw';

import basicCode from './basic/basic.ts?raw';
import groupCode from './group/group.ts?raw';
import groupSvgCode from './group-svg/group-svg.ts?raw';
import cardCode from './card/card.ts?raw';
import hierarchicalCode from './hierarchical/hierarchical.ts?raw';

import { Basic } from './basic/basic';
import { Group } from './group/group';
import { GroupSvg } from './group-svg/group-svg';
import { Card } from './card/card';
import { Hierarchical } from './hierarchical/hierarchical';

export class MenuExamples {
  basicHtml = basicHtml;
  groupHtml = groupHtml;
  groupSvgHtml = groupSvgHtml;
  cardHtml = cardHtml;
  cardSass = cardSass;
  hierarchicalHtml = hierarchicalHtml;

  basicCode = basicCode;
  groupCode = groupCode;
  groupSvgCode = groupSvgCode;
  cardCode = cardCode;
  hierarchicalCode = hierarchicalCode;

  basic = Basic;
  group = Group;
  groupSvg = GroupSvg;
  card = Card;
  hierarchical = Hierarchical;
}
