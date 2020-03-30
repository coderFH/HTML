/*
联合类型适用于那些值可以为不同类型的情况
但当我们想明确的了解pet是否为Fish 或者 为 Bird 时怎么办
*/

interface Bird {
    fly() : void
    sleep() : void
}

interface Fish {
    swim() : void
    sleep() : void
}

class FishAnimal implements Fish {
    swim(): void {
        console.log('鱼会游泳')
    }
    sleep(): void {
        console.log('鱼会睡觉');
    }
}

function getSmallPet() : Fish | Bird {
    return new FishAnimal()
}

let pet = getSmallPet()
if ((pet as Fish).swim) {  //通过as断言来进行类型保护
    (pet as Fish).swim()
} else {
    (pet as Bird).fly()
}

export {}
