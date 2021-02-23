import bodyHtml from '!!raw-loader!./body/body.html';
import captionHtml from '!!raw-loader!./caption/caption.html';
import headlineHtml from '!!raw-loader!./headline/headline.html';
import pageHtml from '!!raw-loader!./page/page.html';
import subtitleHtml from '!!raw-loader!./subtitle/subtitle.html';

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
