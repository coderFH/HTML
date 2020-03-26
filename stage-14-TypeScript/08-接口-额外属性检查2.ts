interface Circle {
    color : string //颜色
    area : number   //面积
} 

interface CircleConfig {
    color? : string
    radius? : number
    // key : value
    [propsName : string] : any
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
//方式2.字符串索引签名
let myCircle3 = createCircle1({color : 'red',radius : 200,test1 : 1000, a : 'q'})

export {}