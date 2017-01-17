"use strict";
var zip = require("./ZipCodeValidator");
var strings = ["Hello", "98052", "101"];
var validator = new zip.ZipCodeValidator();
strings.forEach(function (s) {
    console.log("\"" + s + "\" - " + (validator.isAcceptable(s) ? "matches" : "does not match"));
});
