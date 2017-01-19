interface Lengrnwise { //定义一个接口来描述约束条件
    length: number;
}
function loggingIndetity<T extends Lengrnwise>(arg: T): T { //使用这个接口和extends关键字实现约束
    console.log(arg.length); 
    return arg;
}