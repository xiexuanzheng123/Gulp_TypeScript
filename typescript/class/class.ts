class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");
alert(greeter.greet());

/*********下面做比较********** */
class Greeter1 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if(this.greeting) {
            return "Hello, " + this.greeting;
        }else{
            return Greeter1.standardGreeting;
        }
    }
}

