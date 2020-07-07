import { ComponentViewer } from '../component-viewer/component-viewer';
import { useView, PLATFORM } from 'aurelia-framework';

@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class Drawer extends ComponentViewer { }
