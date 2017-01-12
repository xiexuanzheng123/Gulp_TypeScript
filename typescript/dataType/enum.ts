/*enum Enum {
    A = 1
}
let a = Enum.A;
let nameOfA = Enum[Enum.A];

console.log( a );
console.log( nameOfA );*/


/*********************
使用declare 声明的枚举类型编译之后报没有定义。。。。
 *******************/
declare enum Enum {
    A = 1,
    B,
    C = 2
}
let b = Enum.B;
alert(b);