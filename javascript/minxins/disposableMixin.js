var disposable = (function () {
    function disposable() {
    }
    disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return disposable;
}());
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = false;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = (function () {
    function SmartObject() {
        var _this = this;
        this.isDisposed = false;
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [disposable, Activatable]);
var smartObj = new SmartObject();
setTimeout(function () { return smartObj.interact(); }, 1000);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
