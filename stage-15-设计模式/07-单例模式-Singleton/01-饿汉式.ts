class P {}
let p = new P();
let p1 = new P();
console.log(p === p1);

class Singleton {
    //1.构造器私有化,外部不能new
    private constructor() {}

    //2.本类内部创建对象实例
    private static instance = new Singleton();

    //3.提供一个公有的静态方法,返回实例
    public static getInstance() : Singleton {
        return this.instance;
    }
}

let s = Singleton.getInstance();
let s1 = Singleton.getInstance();

console.log(s === s1);

export{}



