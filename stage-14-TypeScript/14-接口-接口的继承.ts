interface Animal {
    //品种
    breed : string
}

interface Cat extends Animal {
    //颜色
    color : string
}

let cat = {} as Cat
cat.breed = '美短'
cat.color = "白色"

export {}