/*
1.类型保护就是一些表达式,他会在运行时检查以确保在某个作用域里的类型
2.定义一个类型保护,我们只要简单地定义一个函数,它的返回值是一个类型谓词
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

//谓词: p is type
function isFish(pet : Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined
}

let pet = getSmallPet()
if (isFish(pet)) {  //通过自定义的类型保护
    (pet as Fish).swim()
} else {
    (pet as Bird).fly()
}

export {}
