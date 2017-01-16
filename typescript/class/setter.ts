var passcode = "secret passcode";

class Empl {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if(passcode && passcode=="secret passcode") {
            this._fullName = newName;
        }else{
            console.log("Error");
        }
    }
}
var empl = new Empl();
empl.fullName = "Bob Smith";
if(empl.fullName) {
    alert(empl.fullName);
}