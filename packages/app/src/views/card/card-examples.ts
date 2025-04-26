import defaultHtml from './default/default.html?raw';
import defaultSass from './default/default.scss?raw';
import headlinesHtml from './headlines/headlines.html?raw';
import headlinesSass from './headlines/headlines.scss?raw';
import photosHtml from './photos/photos.html?raw';
import photosSass from './photos/photos.scss?raw';
import musicHtml from './music/music.html?raw';
import musicSass from './music/music.scss?raw';

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
