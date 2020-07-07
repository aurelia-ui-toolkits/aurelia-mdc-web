import { useView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { Router } from 'aurelia-router';

@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class List extends ComponentViewer { }
