import defaultHtml from '!!raw-loader!./default/default.html?raw';
import defaultSass from '!!raw-loader!./default/default.scss';
import headlinesHtml from '!!raw-loader!./headlines/headlines.html?raw';
import headlinesSass from '!!raw-loader!./headlines/headlines.scss';
import photosHtml from '!!raw-loader!./photos/photos.html?raw';
import photosSass from '!!raw-loader!./photos/photos.scss';
import musicHtml from '!!raw-loader!./music/music.html?raw';
import musicSass from '!!raw-loader!./music/music.scss';

import { Default } from './default/default';
import { Headlines } from './headlines/headlines';
import { Photos } from './photos/photos';
import { Music } from './music/music';

export class CardExamples {
  defaultHtml = defaultHtml;
  defaultSass = defaultSass;

  headlinesHtml = headlinesHtml;
  headlinesSass = headlinesSass;

  photosHtml = photosHtml;
  photosSass = photosSass;

  musicHtml = musicHtml;
  musicSass = musicSass;

  default = Default;
  headlines = Headlines;
  photos = Photos;
  music = Music;
}
