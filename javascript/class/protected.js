var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persion = (function () {
    function Persion(name) {
        this.name = name;
    }
    return Persion;
}());
var Employeee = (function (_super) {
    __extends(Employeee, _super);
    function Employeee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employeee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employeee;
}(Persion));
var howard = new Employeee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); 
