import { viewEngineHooks } from 'aurelia-framework';

@viewEngineHooks
export class EnhanceMdcTextfield {
  beforeCompile(template: DocumentFragment) {
    const textFields = template.querySelectorAll<HTMLElement>('mdc-text-field');
    for (const tf of Array.from(textFields)) {
      const label = document.createElement('label');

      // Grab all of the original's attributes, and pass them to the replacement
      for (let i = 0, l = tf.attributes.length; i < l; ++i) {
        const nodeName = tf.attributes.item(i)!.nodeName;
        const nodeValue = tf.attributes.item(i)!.nodeValue;
        label.setAttribute(nodeName, nodeValue!);
      }
      label.setAttribute('as-element', 'mdc-text-field');

      // Persist contents
      label.innerHTML = tf.innerHTML;

      // Switch!
      tf.parentNode!.replaceChild(label, tf);
    }
  }
}
