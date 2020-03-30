class Animal {
    animalName : string
    constructor(animalName : string) {
        this.animalName = animalName
    }

    move(distance : number = 0) {
        console.log(`${this.animalName},我移动了${distance}米`);
    }
}


class Snake extends Animal {
    constructor(animalName : string) {
        super(animalName);
    }

    move(distance : number = 10) {
        console.log(`我是爬行的`);
        //调用父类的move
        super.move(distance)
    }
}

class Horse extends Animal {
    constructor(animalName : string) {
        super(animalName);
    }

    move(distance : number = 150) {
        console.log(`我是飞奔的`);
        //调用父类的move
        super.move(distance)
    }
}

let horse = new Horse("汗血宝马")
horse.move();

let snake = new Snake("小青蛇")
snake.move();

export{}