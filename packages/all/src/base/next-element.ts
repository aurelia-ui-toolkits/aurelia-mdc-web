export function nextElement(element?: HTMLElement, reverse?: boolean) {
  /*check if an element is defined or use activeElement*/
  const activeElem = element instanceof HTMLElement ? element : document.activeElement as HTMLElement;
  if (!activeElem) {
    return;
  }

  let queryString = [
    'a:not([disabled]):not([tabindex="-1"])',
    'button:not([disabled]):not([tabindex="-1"])',
    'input:not([disabled]):not([tabindex="-1"]):not(.mdc-text-field__input)',
    '.mdc-text-field',
    'select:not([disabled]):not([tabindex="-1"])',
    '[tabindex]:not([disabled]):not([tabindex="-1"])'
    /* add custom queries here */
  ].join(','),
    queryResult = Array.from(document.querySelectorAll<HTMLElement>(queryString)).filter(elem => {
      /*check for visibility while always include the current activeElement*/
      return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem === activeElem;
    }),
    indexedList = queryResult.slice().filter(elem => {
      /* filter out all indexes not greater than 0 */
      return elem.tabIndex == 0 || elem.tabIndex == -1 ? false : true;
    }).sort((a, b) => {
      /* sort the array by index from smallest to largest */
      return a.tabIndex != 0 && b.tabIndex != 0
        ? (a.tabIndex < b.tabIndex ? -1 : b.tabIndex < a.tabIndex ? 1 : 0)
        : a.tabIndex != 0 ? -1 : b.tabIndex != 0 ? 1 : 0;
    }),
    focusable = [...indexedList, ...queryResult.filter(elem => {
      /* filter out all indexes above 0 */
      return elem.tabIndex == 0 || elem.tabIndex == -1 ? true : false;
    })];

  /* if reverse is true return the previous focusable element
     if reverse is false return the next focusable element */
  return reverse ? (focusable[focusable.indexOf(activeElem) - 1] || focusable[focusable.length - 1])
    : (focusable[focusable.indexOf(activeElem) + 1] || focusable[0]);
}
