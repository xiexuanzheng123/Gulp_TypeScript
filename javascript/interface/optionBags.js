/****************************************
 * 一是可以对可能存在的属性进行预定义
 * 二是可以捕获引用了不存在的属性时的错误
 *****************************************/
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
alert(mySquare.color);
