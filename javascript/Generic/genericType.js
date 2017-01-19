// function identity<T>(arg: T): T {
//     return arg;
// }
// var myIdentity: <T>(arg: T) => T = identity;
// var myIdentity: {<T>(arg: T): T} = identity; //使用带有调用签名的对象字面量来定义泛型函数
function identity(arg) {
    return arg;
}
var myIdentity = identity;
