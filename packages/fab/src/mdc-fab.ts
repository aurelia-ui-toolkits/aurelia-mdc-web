import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * @selector mdc-fab
 * @selector a[mdc-fab]
 * @selector button[mdc-fab]
 */
@useView(PLATFORM.moduleName('./mdc-fab.html'))
@customElement('mdc-fab')
export class MdcFab {
  /** Make the fab smaller (40 x 40 pixels) */
  @bindable({ set: booleanAttr })
  mini: boolean;

  /** Modifies the FAB to wider size which includes a text label */
  @bindable({ set: booleanAttr })
  extended: boolean;

  /** Set the mini fab touch target to 48 x 48 px. Only applies if FAB is set to mini as well. */
  @bindable({ set: booleanAttr })
  touch: boolean;

  /** Animates the FAB in or out of view */
  @bindable({ set: booleanAttr })
  exited: boolean;

  /** Optional. Apply a Material Icon. */
  @bindable
  icon: string;

  /** Optional, for the text label. Applicable only for Extended FAB. */
  @bindable
  label: string;
}
