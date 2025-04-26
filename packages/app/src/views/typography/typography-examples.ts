import bodyHtml from './body/body.html?raw';
import captionHtml from './caption/caption.html?raw';
import headlineHtml from './headline/headline.html?raw';
import pageHtml from './page/page.html?raw';
import subtitleHtml from './subtitle/subtitle.html?raw';

import { Body } from './body/body';
import { Caption } from './caption/caption';
import { Headline } from './headline/headline';
import { Page } from './page/page';
import { Subtitle } from './subtitle/subtitle';

export class TypographyExamples {
  bodyHtml = bodyHtml;
  captionHtml = captionHtml;
  headlineHtml = headlineHtml;
  pageHtml = pageHtml;
  subtitleHtml = subtitleHtml;

  body = Body;
  caption = Caption;
  headline = Headline;
  page = Page;
  subtitle = Subtitle;
}
