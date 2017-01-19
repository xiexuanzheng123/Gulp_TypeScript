class disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = false;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements disposable, Activatable {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed),500);
    }
    interact() {
        this.activate();
    }
    isDisposed: boolean = false;
    dispose: () => void;
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(SmartObject, [disposable, Activatable]);
var smartObj = new SmartObject();
setTimeout( () => smartObj.interact(), 1000);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}
