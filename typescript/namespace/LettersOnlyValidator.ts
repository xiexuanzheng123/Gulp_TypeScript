///<reference path = "Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z] + $/;
    export class lettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}