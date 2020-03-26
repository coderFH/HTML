//额外的属性检查
//如果我想传入CircleConfig1没有定义的属性呢?
interface Circle {
    color : string //颜色
    area : number   //面积
} 

interface CircleConfig {
    color? : string
    radius? : number
}

function createCircle1(config : CircleConfig) : Circle {
    let newCircle = {color : 'green',area : 100};
    if (config.color) {
        newCircle.color = config.color
    }
    if (config.radius) {
        newCircle.area = Math.PI * config.radius * config.radius
    }
    return newCircle;
}

//如果我想传入CircleConfig1没有定义的属性呢?
//方式1.使用类型断言
let myCircle2 = createCircle1({color : 'red',radius : 200,test : 1000} as CircleConfig) ;

export {}