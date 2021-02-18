export class Inline {
  handleClosing(evt: { detail: unknown }) {
    alert(JSON.stringify(evt.detail));
  }
}
