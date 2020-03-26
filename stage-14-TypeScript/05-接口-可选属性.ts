//2.接口-可选属性
interface Circle {
    color : string //颜色
    area : number   //面积
}

interface CircleConfig { //?号表示属性可选,可传可不传
    color? : string
    radius? : number
}

function createCircle(config : CircleConfig) : Circle {
    let newCircle = {color : 'green',area : 100};
    if (config.color) {
        newCircle.color = config.color
    }
    if (config.radius) {
        newCircle.area = Math.PI * config.radius * config.radius
    }
    return newCircle;
}

let myCircle = createCircle({radius : 200})
console.log(myCircle.area);
let myCircle1 = createCircle({color : 'red'})
console.log(myCircle1);

export {}