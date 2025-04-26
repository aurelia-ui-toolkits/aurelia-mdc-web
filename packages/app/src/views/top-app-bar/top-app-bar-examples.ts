import collapsedHtml from './collapsed/collapsed.html?raw';
import denseHtml from './dense/dense.html?raw';
import fixedHtml from './fixed/fixed.html?raw';
import prominentHtml from './prominent/prominent.html?raw';
import shortHtml from './short/short.html?raw';
import standardHtml from './standard/standard.html?raw';
import tabsHtml from './tabs/tabs.html?raw';
import tabsScss from './tabs/tabs.scss?raw';
import themeHtml from './theme/theme.html?raw';
import themeScss from './theme/theme.scss?raw';

import { Collapsed } from './collapsed/collapsed';
import { Dense } from './dense/dense';
import { Fixed } from './fixed/fixed';
import { Prominent } from './prominent/prominent';
import { Short } from './short/short';
import { Standard } from './standard/standard';
import { Tabs } from './tabs/tabs';
import { Theme } from './theme/theme';

export class TopAppBarExamples {
  collapsedHtml = collapsedHtml;
  denseHtml = denseHtml;
  fixedHtml = fixedHtml;
  prominentHtml = prominentHtml;
  shortHtml = shortHtml;
  standardHtml = standardHtml;
  tabsHtml = tabsHtml;
  tabsScss = tabsScss;
  themeHtml = themeHtml;
  themeScss = themeScss;

  collapsed = Collapsed;
  dense = Dense;
  fixed = Fixed;
  prominent = Prominent;
  short = Short;
  standard = Standard;
  tabs = Tabs;
  theme = Theme;
}
