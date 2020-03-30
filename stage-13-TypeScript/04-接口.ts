//1.定义一个接口
/*
好处:
1.对某些属性进行预定义
2.捕获错误
*/
interface Person {
    pName : string
    pAge : number
    pJob : string
}

let person : Person = {
    pAge : 18,
    pJob : "上学",
    pName : "小明"
}

function printPerson(person : Person) {
    console.log(`我的名字加:${person.pName}`);
}
printPerson(person);

export{}













