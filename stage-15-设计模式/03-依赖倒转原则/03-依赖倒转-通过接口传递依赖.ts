//方式1: 通过接口传递实现依赖
interface ITV {
    play() : void
}

interface IOpenAndClose {
    open(tv : ITV) : void;
}

class Changhong implements ITV {
    play(): void {
        console.log("长虹电视机 打开了");
    }
}

class OpenAndClose implements IOpenAndClose {
    open(tv: ITV): void {
        tv.play();
    }
}

let changhong = new Changhong;
let openAndClose = new OpenAndClose();
openAndClose.open(changhong);

export {}