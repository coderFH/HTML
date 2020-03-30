/*
1.TS类型推断会按另外一种方式,我们称作`上下文类型`
2.上下文类型的出现赫尔表达式的类型以及所处的位置相关

上下文类型会在很多情况下使用到
1.通常包含函数的参数,赋值表达式的右边,类型断言,对象成员,数字字面量和返回值语句
2.上下文类型也会作为最佳通用类型的候选类型
*/

// window.onmousedown = function(mouseEvent) { //有问题,按说他会推断出类型,然后具有target属性
//     console.log(mouseEvent.target);
// }

//参数类型注解,上下文就会被忽略
// window.onmousedown = function(mouseEvent: string) { //我限制了string,那肯定没有target属性了,因为不会自动推断了
//     // console.log(mouseEvent.target);
// }


class Animal {
    breed! : string
}
class Dog extends Animal {}
class Cat extends Animal {}

function createZoo() : Animal[] {
    return [new Dog(),new Cat()]
}

export {}