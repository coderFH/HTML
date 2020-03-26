let num = 10
let str = "Alibaba"
let arr = [0,10,true,null] // 会推断成 (number | boolean | null)[]

class Animal {
    breed! : string
}

class Dog extends Animal {}
class Cat extends Animal {}

let zoo = [new Dog(),new Cat()] //会推断成(Dog | Cat)[]

let zoo1 : Animal[] = [new Dog(),new Cat()] //这样就会推断成 Animal[]

export {}