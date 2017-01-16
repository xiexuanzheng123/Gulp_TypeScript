/*class Animal {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInmeters: number = 0) {
        console.log(`${this.name} moved ${distanceInmeters}m`);
    }
}*/
class Animal {
constructor(private name: string){}  /* 参数属性 舍弃了theName */
    move(distanceInmeters: number) {
        console.log(`${this.name} moved ${distanceInmeters}m`);
    }
}

class Snake extends Animal {
    constructor(name: string){ /***包含constructor函数的派生类必须调用super()，它会执行基类的构造方法 */
        super(name);
    }
    move(distanceInmeters = 5) { /* 子类重写父类方法 */
        console.log("Slithering....");
        super.move(distanceInmeters);
    }
}

class Horse extends Animal {
    constructor(name: string){
        super(name);
    }
    move(distanceInmeters = 5) {
        console.log("Galloping....");
        super.move(distanceInmeters);
    }
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move();