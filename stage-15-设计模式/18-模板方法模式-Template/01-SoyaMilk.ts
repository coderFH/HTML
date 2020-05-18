//抽象类,表示豆浆
abstract class SoyaMilk {
    //模板方法,make,模板方法如何不让子类覆盖呢
    make() : void {
        this.select();
        if (this.customerWantCondiments()) {
            this.addCondiments();
        }
        this.soak();
        this.beat();
    }

    //选材
    select() : void {
        console.log("第一步: 选择好的新鲜黄豆");
    }

    // 添加不同的配料,抽象方法,子类具体实现
    abstract addCondiments() : void; 

    // 浸泡
    soak() : void {
        console.log("第三步: 黄豆和配料开始浸泡,需要3小时");
    }

    // 打碎
    beat() : void {
        console.log("第四步: 黄豆和配料放到豆浆机去打碎");
    }

    // 钩子方法,决定是否需要添加配料
    customerWantCondiments() : boolean {
        return true;
    }
}

export {SoyaMilk}