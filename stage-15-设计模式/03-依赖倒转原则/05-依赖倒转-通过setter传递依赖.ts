//方式3: 通过setter方法依赖传递
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

    set TV(v : ITV) {
        this.tv = v;
    }
    
    open(): void {
        this.tv.play();
    }
}

let changhong = new Changhong;
let openAndClose = new OpenAndClose();
openAndClose.TV = changhong;
openAndClose.open();

export {}