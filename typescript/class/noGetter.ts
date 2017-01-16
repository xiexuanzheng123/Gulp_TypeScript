/**TypeScript支持getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。 */
class Teacher {
    fullName: string;
}

var teacher = new Teacher(); 

teacher.fullName = "Bob Smith"; //可以随意设置类中的成员属性
if(teacher.fullName) {
    console.log(teacher.fullName);
}