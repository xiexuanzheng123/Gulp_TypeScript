class Persion {
    protected name: string; /******protected成员在派生类中仍然可以访问**** */
    constructor(name: string) {
        this.name = name;
    }
}
class Employeee extends Persion {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
     public getElevatorPitch() {
         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
     }
}

var howard = new Employeee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name);