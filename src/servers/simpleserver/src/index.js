"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tomcatlib_1 = require("tomcatlib");
tomcatlib_1.server.Utils.test();
console.log('hello world');
var jjj = /** @class */ (function (_super) {
    __extends(jjj, _super);
    function jjj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return jjj;
}(tomcatlib_1.server.interfaces.abstract));
