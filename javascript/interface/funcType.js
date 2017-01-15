/******************
 * 像是一个只有参数列表和返回值类型的函数定义
 *
 * 函数的参数名也可以不与接口里定义的名字相同
 * 只需要类型相同
 ***********************/
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
