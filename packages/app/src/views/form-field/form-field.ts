import { ComponentViewer } from '../component-viewer/component-viewer';
import { useView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Router } from 'aurelia-router';

@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class FormField extends ComponentViewer { }
