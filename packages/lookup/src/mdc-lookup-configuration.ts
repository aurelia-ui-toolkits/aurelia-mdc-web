/** Configuration object */
export class MdcDefaultLookupConfiguration {
  /** Default debounce time in milliseconds */
  public debounce: number = 850;

  /** Default message displayed while async options function is being executed */
  public searchingMessage: string = 'Searching...';

  /** Default message displayed when options are not found */
  public notFoundMessage: string = 'Not found';
}
