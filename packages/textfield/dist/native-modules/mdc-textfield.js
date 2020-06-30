import { __decorate } from "tslib";
import { useView, inject, customElement } from 'aurelia-framework';
var MdcTextField = /** @class */ (function () {
    function MdcTextField(element) {
        this.element = element;
        this.element;
    }
    MdcTextField = __decorate([
        inject(Element),
        useView('./mdc-textfield.html'),
        customElement('mdc-textfield')
    ], MdcTextField);
    return MdcTextField;
}());
export { MdcTextField };
//# sourceMappingURL=mdc-textfield.js.map