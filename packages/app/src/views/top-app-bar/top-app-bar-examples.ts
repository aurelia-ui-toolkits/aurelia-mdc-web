import collapsedHtml from '!!raw-loader!./collapsed/collapsed.html';
import denseHtml from '!!raw-loader!./dense/dense.html';
import fixedHtml from '!!raw-loader!./fixed/fixed.html';
import prominentHtml from '!!raw-loader!./prominent/prominent.html';
import shortHtml from '!!raw-loader!./short/short.html';
import standardHtml from '!!raw-loader!./standard/standard.html';
import tabsHtml from '!!raw-loader!./tabs/tabs.html';
import tabsScss from '!!raw-loader!./tabs/tabs.scss';
import themeHtml from '!!raw-loader!./theme/theme.html';
import themeScss from '!!raw-loader!./theme/theme.scss';

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
