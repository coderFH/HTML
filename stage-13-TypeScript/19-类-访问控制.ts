//TS中,成员默认都是public
class Animal {
    //默认是public
    private name : string
    protected age : number
    constructor(name : string,age : number) {
        this.name = name;
        this.age = age;
    }
}

class Cat extends Animal {
    private color : string
    constructor(name : string, age : number,color : string) {
        super(name,age)
        this.color = color;
    }

    des() {
        //private在父类中是私有的,子类访问不到,但是子类可以访问到父类protected的
        console.log(`我的年龄是${this.age},我是${this.color}色的`); 
    }
}

class Dog {
    private name : string
    constructor(name : string) {
        this.name = name
    }
}


let animal = new Animal("小花花",18)
console.log(animal)
let cat = new Cat("狸花猫",3,"棕色")
// cat.age = 2 //外界访问不了子类继承父类受保护的属性  
console.log(cat.des());


let dog = new Dog("哈士奇")
animal = cat //cat可以赋值给animal
// animal = dog  但是dog不能赋值给animal,因为他们没有任何关系

export{}