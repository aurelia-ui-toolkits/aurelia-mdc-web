import customHtml from '!!raw-loader!./custom.html';
import customSass from '!!raw-loader!./custom.scss';
import customCode from '!!raw-loader!./custom';
import disableRippleHtml from '!!raw-loader!./disable-ripple.html';
import shapedHtml from '!!raw-loader!./shaped.html';
import shapedSass from '!!raw-loader!./shaped.scss';
import singleLineHtml from '!!raw-loader!./single-line.html';

export class Examples {
  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;
  disableRippleHtml = disableRippleHtml;
  shapedHtml = shapedHtml;
  shapedSass = shapedSass;
  singleLineHtml = singleLineHtml;

  expanded: boolean;
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  items = [
    { label: 'Wi-Fi', icon: 'network_wifi' },
    { label: 'Bluetooth', icon: 'bluetooth' },
    { label: 'Data Usage', icon: 'data_usage' }
  ];

  folders = [
    { name: 'Photos', icon: 'folder', addDate: 'Jan 9, 2015' },
    { name: 'Recipes', icon: 'folder', addDate: 'Jan 17, 2015' },
    { name: 'Work', icon: 'folder', addDate: 'Jan 28, 2015' }
  ];

  files = [
    { name: 'Vacation Itinerary', icon: 'insert_drive_file', addDate: 'Jan 10, 2015' },
    { name: 'Kitchen Remodel', icon: 'insert_drive_file', addDate: 'Jan 20, 2015' }
  ];

}
