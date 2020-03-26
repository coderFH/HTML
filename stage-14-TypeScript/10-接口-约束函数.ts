interface CompareFun {
    (first:number,last : number) : boolean
}

//上边的接口约束好后,你这里再增加或者减少参数都会报错
let myCompare : CompareFun = function (first:number,last : number) : boolean {
    return first > last
}

//上边的太详细了,可以简化
let myCompare1 : CompareFun = function (a :number,b : number) : boolean {
    return a > b
}

let myCompare2 : CompareFun = function (a,b) : boolean {
    return a > b
}

export {}