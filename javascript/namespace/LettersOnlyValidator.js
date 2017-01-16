///<reference path = "Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z] + $/;
    var lettersOnlyValidator = (function () {
        function lettersOnlyValidator() {
        }
        lettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return lettersOnlyValidator;
    }());
    Validation.lettersOnlyValidator = lettersOnlyValidator;
})(Validation || (Validation = {}));
