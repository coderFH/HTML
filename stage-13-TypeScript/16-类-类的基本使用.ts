class Cat {
    catName : string
    constructor(catName : string) {
        this.catName = catName
    }

    say() {
        return "大家好,我是" + this.catName
    }
}

let cat = new Cat("狸花猫")
console.log(cat.say());


export{}