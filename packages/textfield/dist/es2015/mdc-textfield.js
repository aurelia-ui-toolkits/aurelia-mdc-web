import { __decorate } from "tslib";
import { useView, inject, customElement } from 'aurelia-framework';
let MdcTextField = class MdcTextField {
    constructor(element) {
        this.element = element;
        this.element;
    }
};
MdcTextField = __decorate([
    inject(Element),
    useView('./mdc-textfield.html'),
    customElement('mdc-textfield')
], MdcTextField);
export { MdcTextField };
//# sourceMappingURL=mdc-textfield.js.map