class Animal {
    animalName : string
    constructor(animalName : string) {
        this.animalName = animalName
    }

    say() {
        return "大家好,我是" + this.animalName
    }
}

class Dog extends Animal {
    //品种
    breed : string;
    constructor(breed : string,animalName : string) {
        super(animalName);
        this.breed = breed
    }
    logBreed() {
        return `我的品种是${this.breed}`;
    }
}

let dog = new Dog("哈士奇","小灰")
console.log(dog.say());
console.log(dog.logBreed());

export{}