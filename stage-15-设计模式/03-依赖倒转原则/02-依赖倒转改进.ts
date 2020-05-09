interface IReceiver {
    getInfo() : string;
}

class Email implements IReceiver {
    getInfo() : string {
        return "电子邮件信息:hello world";
    }
}

class Weixin implements IReceiver {
    getInfo() : string {
        return "微信信息:hello ok";
    }
}

class Person {
    receive(receiver : IReceiver) : void {
        console.log(receiver.getInfo());
    }
}

let p = new Person();
p.receive(new Email());
p.receive(new Weixin());

export {Person,Email,Weixin}