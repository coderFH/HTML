class Dog {
    dogName : string;
    dogAge : number
    dogSex : string

    constructor(dogName : string,dogAge : number ,dogSex : string) {
        this.dogName = dogName
        this.dogAge = dogAge
        this.dogSex = dogSex
    }

    eat(foods : string) {
        console.log(this.dogName + '在吃' + foods);
    }
}

let dog = new Dog("旺财",18,"0")
dog.eat("骨头");

export {}