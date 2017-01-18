function buildName1(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
var employee = buildName1("One", "Two", "Three", "Four");
alert(employee);