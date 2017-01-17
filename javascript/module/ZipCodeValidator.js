"use strict";
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
ZipCodeValidator.numberRegexp = /^[0-9]+$/;
exports.__esModule = true;
exports["default"] = ZipCodeValidator;
