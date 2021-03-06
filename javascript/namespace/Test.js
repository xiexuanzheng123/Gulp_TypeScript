///<reference path = "Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
var strings = ["Hello", "98052", "210"];
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.lettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log("" + s + "" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});
