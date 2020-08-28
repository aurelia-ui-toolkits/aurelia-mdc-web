import collapsedHtml from '!!raw-loader!./collapsed.html';
import denseHtml from '!!raw-loader!./dense.html';
import examplesHtml from '!!raw-loader!./examples.scss';
import fixedHtml from '!!raw-loader!./fixed.html';
import prominentHtml from '!!raw-loader!./prominent.html';
import shortHtml from '!!raw-loader!./short.html';
import standardHtml from '!!raw-loader!./standard.html';
import tabsHtml from '!!raw-loader!./tabs.html';
import tabsScss from '!!raw-loader!./tabs.scss';
import themeHtml from '!!raw-loader!./theme.html';
import themeScss from '!!raw-loader!./theme.scss';

export class Examples {
  collapsedHtml = collapsedHtml;
  denseHtml = denseHtml;
  examplesHtml = examplesHtml;
  fixedHtml = fixedHtml;
  prominentHtml = prominentHtml;
  shortHtml = shortHtml;
  standardHtml = standardHtml;
  tabsHtml = tabsHtml;
  tabsScss = tabsScss;
  themeHtml = themeHtml;
  themeScss = themeScss;

  text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis,
  repudiandae dignissimos et quam velit autem mollitia tenetur,
  eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.
  Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel,
  consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium,
  excepturi!`;

  lorems = Array(5).fill(this.text);

  tabs = [
    { label: 'Flights', icon: 'airplanemode_active' },
    { label: 'Hotel', icon: 'hotel' },
    { label: 'Favorites', icon: 'favorite' }
  ];

  links = [
    { label: 'Inbox', icon: 'inbox' },
    { label: 'Star', icon: 'star' },
    { label: 'Sent Mail', icon: 'send' },
    { label: 'Drafts', icon: 'drafts' }
  ];

}
