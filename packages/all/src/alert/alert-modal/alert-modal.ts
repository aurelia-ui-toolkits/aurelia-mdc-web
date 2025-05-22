import { IAlertModalPayload } from './i-alert-modal-payload';
import template from './alert-modal.html?raw';
import { customElement } from 'aurelia';
import './alert-modal.scss'

@customElement({ name: 'alert-modal', template })
export class AlertModal {
  payload: IAlertModalPayload;

  loading(payload: IAlertModalPayload) {
    this.payload = payload;
  }
}
