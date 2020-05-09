//方式2: 通过构造方法依赖传递
interface IOpenAndClose {
    open() : void; 
}

interface ITV {
    play() : void
}

class Changhong implements ITV {
    play(): void {
        console.log("长虹电视机 打开了");
    }
}

class OpenAndClose implements IOpenAndClose {
    private tv : ITV;

    constructor(tv : ITV) {
        this.tv = tv
    }

    open(): void {
        this.tv.play();
    }
}

let changhong = new Changhong;
let openAndClose = new OpenAndClose(changhong);
openAndClose.open();

export {}