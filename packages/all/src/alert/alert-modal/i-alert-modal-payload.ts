export class IAlertModalPayload {
  icon: string;
  iconColour: string;
  caption?: string;
  message?: string;
  html?: string;
  button1Text: string;
  button2Text: string;
  button1Action: string;
  button2Action: string;
  defaultAction: string;
  successAction: string;
  defensive?: boolean;
}
