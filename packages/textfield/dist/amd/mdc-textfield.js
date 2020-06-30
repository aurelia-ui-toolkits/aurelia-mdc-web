define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MdcTextField = void 0;
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
});
//# sourceMappingURL=mdc-textfield.js.map