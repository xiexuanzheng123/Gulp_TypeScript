import zip = require("./ZipCodeValidator");
var strings = ["Hello", "98052", "101"];
var validator = new zip.ZipCodeValidator();

strings.forEach(s => {
    console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match"}`);
})