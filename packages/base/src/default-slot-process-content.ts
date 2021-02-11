import { INode, IPlatform, } from 'aurelia';

export function defaultSlotProcessContent(node: INode, platform: IPlatform) {
  const el = node as Element;
  const template = platform.document.createElement('template');
  template.setAttribute('au-slot', '');
  template.innerHTML = el.innerHTML;
  el.innerHTML = '';
  el.appendChild(template);
}
