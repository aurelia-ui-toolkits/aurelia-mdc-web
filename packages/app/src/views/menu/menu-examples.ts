import basicHtml from '!!raw-loader!./basic/basic.html?raw';
import groupHtml from '!!raw-loader!./group/group.html?raw';
import groupSvgHtml from '!!raw-loader!./group-svg/group-svg.html?raw';
import cardHtml from '!!raw-loader!./card/card.html?raw';
import cardSass from '!!raw-loader!./card/card.scss';
import hierarchicalHtml from '!!raw-loader!./hierarchical/hierarchical.html?raw';

import basicCode from '!!raw-loader!./basic/basic';
import groupCode from '!!raw-loader!./group/group';
import groupSvgCode from '!!raw-loader!./group-svg/group-svg';
import cardCode from '!!raw-loader!./card/card';
import hierarchicalCode from '!!raw-loader!./hierarchical/hierarchical';

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
