import { useView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { ComponentViewer } from '../component-viewer/component-viewer';

@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class Snackbar extends ComponentViewer { }
