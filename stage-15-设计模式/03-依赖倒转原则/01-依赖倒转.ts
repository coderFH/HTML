class Email {
    getInfo() : string {
        return "电子邮件信息:hello world";
    }
}

/*
    完成Person接受消息的功能
    方式1分析
    1.简单,比较容易想到
    2.如果我们获取的对象是微信短信等等,则新增类,同时Person也要增加响应的接受方法
    3.解决思路:引入一个抽象的接口IReceiver,表示接受者,这样Person类入接口IReceiver发生依赖
    因为Email,Weinxin等等属于接受的范围,他们各自实现IReceiver接口就ok,这样我们就符合依赖倒转原则
*/
class Person {
    receive(email : Email) : void {
        console.log(email.getInfo());
    }
}

let p = new Person();
p.receive(new Email());

export {Person,Email}