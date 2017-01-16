var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Anima = (function () {
    function Anima() {
    }
    Anima.prototype.move = function () {
        console.log('roaming the earth...');
    }; //
    return Anima;
}());
/************************************************************************ */
var Department = (function () {
    function Department(name) {
        this.name = name;
        console.log('Department name: ' + this.name);
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports....');
    };
    return AccountingDepartment;
}(Department));
var department;
//department = new Department();
department = new AccountingDepartment();
department.printName();
//department.generateReports();不包含generateReports这个方法 
