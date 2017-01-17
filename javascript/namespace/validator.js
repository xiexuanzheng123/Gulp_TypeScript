/*interface StringValidator {
    isAcceptable(s: string): boolean;
}
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string){
        return s.length === 5 && numberRegexp.test(s);
    }
}
var strings = ["Hello", "98052", "101"];
var validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

strings.forEach(s => {
    for(var name in validators) {
        console.log("" + s + "" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
});*/ 
