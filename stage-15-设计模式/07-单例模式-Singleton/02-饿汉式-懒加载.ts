class Singleton {
    private static instance = null;

    //1.构造器私有化,外部不能new
    private constructor() {}

    //2.提供一个公有的静态方法,当使用到该方法时,才去创建instance
    //懒加载方式: 线程不安全
    public static getInstance() : Singleton {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

let s = Singleton.getInstance();
let s1 = Singleton.getInstance();

console.log(s === s1);

export{}


