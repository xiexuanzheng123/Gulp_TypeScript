var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var LettersOnlyValidator = (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log("" + s + "" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});
