var Validation;
(function (Validation) {
    var lettersRegexpp = /^[A-Za-z]+$/;
    var numberRegexpp = /^[0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexpp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexpp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings = ["Hello", "95545", "101"];
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log("\"" + s + "\" - " + (validators[name].isAcceptable(s) ? "matches" : "does not match") + " " + name);
    }
});
