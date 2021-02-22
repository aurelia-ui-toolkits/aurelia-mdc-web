import basicHtml from '!!raw-loader!./basic/basic.html';
import childHtml from '!!raw-loader!./child/child.html';
import accordionHtml from '!!raw-loader!./accordion/accordion.html';
import independentAccordionsHtml from '!!raw-loader!./independent-accordions/independent-accordions.html';

import { Basic } from './basic/basic';
import { Child } from './child/child';
import { Accordion } from './accordion/accordion';
import { IndependentAccordions } from './independent-accordions/independent-accordions';

export class ExpandableExamples {
  basicHtml = basicHtml;
  childHtml = childHtml;
  accordionHtml = accordionHtml;
  independentAccordionsHtml = independentAccordionsHtml;

  basic = Basic;
  child = Child;
  accordion = Accordion;
  independentAccordions = IndependentAccordions;
}
