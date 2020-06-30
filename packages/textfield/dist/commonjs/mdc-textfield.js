"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdcTextField = void 0;
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var MdcTextField = /** @class */ (function () {
    function MdcTextField(element) {
        this.element = element;
        this.element;
    }
    MdcTextField = tslib_1.__decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.useView('./mdc-textfield.html'),
        aurelia_framework_1.customElement('mdc-textfield')
    ], MdcTextField);
    return MdcTextField;
}());
exports.MdcTextField = MdcTextField;
//# sourceMappingURL=mdc-textfield.js.map