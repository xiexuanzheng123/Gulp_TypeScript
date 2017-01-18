/******在函数和返回值类型之前使用(=>)符号，使之清晰明 */
var myAdd = function (x, y) { return x + y; };
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
buildName1("Bob"); // Bob Smith
buildName1("Bob", "Adams"); //Bob Adams
