var passcode = "secret passcode";
var Empl = (function () {
    function Empl() {
    }
    Object.defineProperty(Empl.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Empl;
}());
var empl = new Empl();
empl.fullName = "Bob Smith";
if (empl.fullName) {
    alert(empl.fullName);
}
