"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./mdc-textfield'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map