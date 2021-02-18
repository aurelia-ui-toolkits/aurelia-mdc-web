import basicHtml from '!!raw-loader!./basic/basic.html';
import groupHtml from '!!raw-loader!./group/group.html';
import groupSvgHtml from '!!raw-loader!./group-svg/group-svg.html';
import cardHtml from '!!raw-loader!./card/card.html';
import cardSass from '!!raw-loader!./card/card.scss';

import basicCode from '!!raw-loader!./basic/basic';
import groupCode from '!!raw-loader!./group/group';
import groupSvgCode from '!!raw-loader!./group-svg/group-svg';
import cardCode from '!!raw-loader!./card/card';

import { Basic } from './basic/basic';
import { Group } from './group/group';
import { GroupSvg } from './group-svg/group-svg';
import { Card } from './card/card';

export class MenuExamples {
  basicHtml = basicHtml;
  groupHtml = groupHtml;
  groupSvgHtml = groupSvgHtml;
  cardHtml = cardHtml;
  cardSass = cardSass;

  basicCode = basicCode;
  groupCode = groupCode;
  groupSvgCode = groupSvgCode;
  cardCode = cardCode;

  basic = Basic;
  group = Group;
  groupSvg = GroupSvg;
  card = Card;
}
