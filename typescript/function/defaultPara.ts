function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

//var result1 = buildName("Bob"); Bob undefined
//var result1 = buildName("Bob","Adams","Sr.");
var result1 = buildName(undefined, "Adams");
console.log(result1);