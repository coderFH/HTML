interface Animal {
    //品种
    breed : string
}

//哺乳动物
interface Mammal {
    //腿的数量
    leg : number
}

interface Cat extends Animal,Mammal {
    //颜色
    color : string
}

let cat = {} as Cat
cat.breed = '美短'
cat.color = "白色"
cat.leg = 4

export {}