"use strict";
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var strings = ["Hello", "98052", "101"];
strings.forEach(function (s) {
    console.log("\"" + s + "\" " + (StaticZipCodeValidator_1["default"](s) ? "matchs" : "does not matchs"));
});
