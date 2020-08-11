import { inject, customElement, useView, PLATFORM, child } from 'aurelia-framework';
import { MDCChipFoundation, MDCChipAdapter, chipCssClasses,
  MDCChipInteractionEventDetail, MDCChipSelectionEventDetail, MDCChipRemovalEventDetail, MDCChipNavigationEventDetail } from '@material/chips';
import { MdcChipPrimaryAction } from './../mdc-chip-primary-action';
import { MdcChipText } from '../mdc-chip-text';
import { MdcChipCheckmark } from '../mdc-chip-checkmark';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MdcChipIcon } from '../mdc-chip-icon/mdc-chip-icon';
import { bindable } from 'aurelia-typed-observable-plugin';

let chipId = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip.html'))
@customElement("mdc-chip")
export class MdcChip extends MdcComponent<MDCChipFoundation> {
  cssClasses = chipCssClasses;

  id: string = `mdc-chip-${++chipId}`;

  @bindable.booleanAttr
  selected: boolean;

  @bindable.booleanAttr
  touch: boolean;

  @child("mdc-chip-text")
  text?: MdcChipText;

  @child("mdc-chip-icon.mdc-chip-icon--leading")
  leadingIcon?: MdcChipIcon;

  @child("mdc-chip-icon.mdc-chip-icon--trailing")
  trailingIcon?: MdcChipIcon;

  @child("mdc-chip-checkmark")
  checkmark?: MdcChipCheckmark;

  @child("mdc-chip-primary-action")
  primaryAction?: MdcChipPrimaryAction;

  focus() {
    this.root.focus();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCChipAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      addClassToLeadingIcon: (className: string) =>
        this.leadingIcon?.element?.classList?.add(className),
      removeClassFromLeadingIcon: (className: string) =>
        this.leadingIcon?.element?.classList?.remove(className),
      eventTargetHasClass: (target: EventTarget | null, className: string) =>
        (target && (target as Element).classList) ? (target as Element).classList.contains(className) : false,
      getAttribute: (attr: string) => this.root.getAttribute(attr),
      notifyInteraction: () => this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.INTERACTION_EVENT,
        { chipId: this.id }, true /* bubble */),
      notifySelection: (selected: boolean, chipSetShouldIgnore: boolean) =>
        this.emit<MDCChipSelectionEventDetail>(MDCChipFoundation.strings.SELECTION_EVENT, {
          chipId: this.id,
          selected: selected,
          shouldIgnore: chipSetShouldIgnore
        }),
      notifyTrailingIconInteraction: () =>
        this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT, {
            chipId: this.id
          }),
      notifyRemoval: () =>
        this.emit<MDCChipRemovalEventDetail>(MDCChipFoundation.strings.REMOVAL_EVENT, {
          chipId: this.id,
          removedAnnouncement: null
        }),
      notifyNavigation: (key: string, source: any) =>
        this.emit<MDCChipNavigationEventDetail>(MDCChipFoundation.strings.NAVIGATION_EVENT, {
          chipId: this.id,
          key: key,
          source: source
        }),
      notifyEditStart: () =>
        this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.INTERACTION_EVENT, {
          chipId: this.id
        }),
      notifyEditFinish: () =>
        this.emit<MDCChipInteractionEventDetail>(MDCChipFoundation.strings.INTERACTION_EVENT, {
          chipId: this.id
        }),
      getComputedStyleValue: (propertyName: string) =>
        window.getComputedStyle(this.root).getPropertyValue(propertyName),
      setStyleProperty: (propertyName: string, value: string) =>
        this.root.style.setProperty(propertyName, value),
      hasLeadingIcon: () => !!this.leadingIcon,
      getRootBoundingClientRect: () => this.root.getBoundingClientRect(),

      getCheckmarkBoundingClientRect: () =>
        this.checkmark?.element?.getBoundingClientRect() ?? null,
      setPrimaryActionAttr: (attr: string, value: string) => this.primaryAction?.root?.setAttribute(attr, value),
      focusPrimaryAction: () => this.primaryAction?.focus(),
      focusTrailingAction: () => this.trailingIcon?.focus(),
      removeTrailingActionFocus: () => {},
      isTrailingActionNavigable: () => true,
      isRTL: () => typeof window !== 'undefined' ?
        window.getComputedStyle(this.root).getPropertyValue('direction') === 'rtl' : false,
    };
    return new MDCChipFoundation(adapter);
  }
}
