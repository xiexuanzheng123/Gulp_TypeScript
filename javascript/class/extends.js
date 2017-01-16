var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*class Animal {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInmeters: number = 0) {
        console.log(`${this.name} moved ${distanceInmeters}m`);
    }
}*/
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    } /* 参数属性 舍弃了theName */
    Animal.prototype.move = function (distanceInmeters) {
        console.log(this.name + " moved " + distanceInmeters + "m");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInmeters) {
        if (distanceInmeters === void 0) { distanceInmeters = 5; }
        console.log("Slithering....");
        _super.prototype.move.call(this, distanceInmeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInmeters) {
        if (distanceInmeters === void 0) { distanceInmeters = 5; }
        console.log("Galloping....");
        _super.prototype.move.call(this, distanceInmeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move();
