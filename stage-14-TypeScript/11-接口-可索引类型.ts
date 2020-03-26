//可索引类型(了解)
interface StrArr {
    [index : number] : string
}

let myArr : StrArr = ['it','666'];
let str : string = myArr[0];

console.log(str);

export{}