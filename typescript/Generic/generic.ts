// function identity(arg: number): number {
//     return arg;
// }

// function identity<T>(arg: T): T { //T类型变量
//     return arg;
// }

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}