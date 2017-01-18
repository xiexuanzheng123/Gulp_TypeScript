/******在函数和返回值类型之前使用(=>)符号，使之清晰明 */
var myAdd: (x: number, y: number) => number =       
 function(x: number, y: number): number {return x + y; }


 function buildName(firstName: string, lastName?: string) { //参数名旁使用?实现可选参数的功能
     if(lastName) {
         return firstName + " " + lastName;
     }else{
         return firstName;
     }
 }

 function buildName1(firstName: string, lastName = "Smith") { //设置一个默认初始值
     return firstName + " " + lastName;
 }

 buildName1( "Bob" );   // Bob Smith
 buildName1("Bob","Adams"); //Bob Adams