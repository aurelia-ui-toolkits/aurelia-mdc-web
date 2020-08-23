import { ComponentViewer } from '../component-viewer/component-viewer';
import { useView, PLATFORM, autoinject } from 'aurelia-framework';

@autoinject
@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class ImageList extends ComponentViewer { }
