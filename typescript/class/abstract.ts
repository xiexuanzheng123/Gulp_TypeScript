abstract class Anima {
    /**抽象方法只定义方法签名不包含方法体 */
    abstract makeSound(): void;             //抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
    move(): void {                          //抽象类可以包含成员的实现细节
        console.log('roaming the earth...');
    } //
}

/************************************************************************ */

abstract class Department {
    constructor(public name: string) {
        console.log('Department name: ' + this.name);
    }
    printName(): void {             //实现细节
        console.log('Department name: ' +　name);
    }
    abstract printMeeting(): void;  //必须在派生类中实现
}


class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am');
    }
    generateReports(): void {
        console.log('Generating accounting reports....');
    }
}
let department: Department;
//department = new Department();
department = new AccountingDepartment();
department.printName();
//department.generateReports();不包含generateReports这个方法