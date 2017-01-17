/*namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexpp = /^[A-Za-z]+$/;
    const numberRegexpp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexpp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexpp.test(s);
        }
    }

}

var strings = ["Hello","95545","101"];
var validators: {[s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

strings.forEach(s=> {
    for( var name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches":"does not match"} ${ name }`);
    }
})*/
