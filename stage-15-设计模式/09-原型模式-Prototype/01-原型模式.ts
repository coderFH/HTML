/*
现在有一只羊tom,姓名为:tom,年龄为:1,颜色为:白色，请编写程序创建和 tom 羊 属性完全相同的 10只羊
*/

class Sheep {
    private name : string;
    private age : number;
    private color : string;

    constructor(name : string,age : number, color : string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    get getName() : string {
        return this.name;
    }

    get getAge() : number {
        return this.age;
    }

    get getColor() : string {
        return this.color;
    }
}

/*
1. 优点是比较好理解，简单易操作。
2. 在创建新的对象时，总是需要重新获取原始对象的属性，如果创建的对象比较复杂时，效率较低
3. 总是需要重新初始化对象，而不是动态地获得对象运行时的状态, 不够灵活
4. 改进的思路分析:
Java 中 Object 类是所有类的根类，
Object 类提供了一个 clone()方法，
该方法可以将一个 Java 对象复制 一份，但是需要实现clone的Java类必须要实现一个接口Cloneable，
该接口表示该类能够复制且具有复制的能力 => 原型模式
*/

let s = new Sheep("tom",1,"白色");

let s1 = new Sheep(s.getName,s.getAge,s.getColor);
let s2 = new Sheep(s.getName,s.getAge,s.getColor);
let s3 = new Sheep(s.getName,s.getAge,s.getColor);
let s4 = new Sheep(s.getName,s.getAge,s.getColor);

console.log(s,s1,s2,s3,s4);
