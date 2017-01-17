import validate from "./StaticZipCodeValidator";
var strings = ["Hello", "98052", "101"];

strings.forEach(s => {
    console.log(`"${s}" ${validate(s) ? "matchs":"does not matchs"}`);
})
