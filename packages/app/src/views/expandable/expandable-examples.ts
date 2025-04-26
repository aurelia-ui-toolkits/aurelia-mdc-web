import basicHtml from './basic/basic.html?raw';
import childHtml from './child/child.html?raw';
import accordionHtml from './accordion/accordion.html?raw';
import independentAccordionsHtml from './independent-accordions/independent-accordions.html?raw';

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
