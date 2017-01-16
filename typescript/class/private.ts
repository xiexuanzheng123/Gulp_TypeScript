class Animals {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Rhino extends Animals {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

var animal = new Animals("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");

animal = rhino; //Right
//animal = employee; //Error