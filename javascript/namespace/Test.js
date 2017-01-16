///<reference path = "Validation.js" />
/// <reference path="LettersOnlyValidator.js" />
/// <reference path="ZipCodeValidator.js" />
var strings = ["Hello", "98052", "210"];
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log("" + s + "" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});
