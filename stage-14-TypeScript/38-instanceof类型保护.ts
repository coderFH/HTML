// instanceof 类型保护是通过构造函数来细化类型的一种方式

class Fish {
    swim(): void {
        console.log('鱼会游泳')
    }
    sleep(): void {
        console.log('鱼会睡觉');
    }
}

class Bird {
    fly(): void {
        console.log('鸟会飞')
    }
    sleep(): void {
        console.log('鸟会睡觉');
    }
}

function getSmallPet() : Fish | Bird {
    return Math.random() > 0.5 ?  new Fish() : new Bird()
}

let pet = getSmallPet()
if (pet instanceof Fish) { 
    (pet as Fish).swim()
} else {
    (pet as Bird).fly()
}

export {}
