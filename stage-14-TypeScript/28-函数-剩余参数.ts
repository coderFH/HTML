function sum(x : number,...resetNumber : number[]) : number {
    let result = x
    for (let i = 0; i < resetNumber.length; i++) {
        result += resetNumber[i];
    }
    return result
}

let res= sum(1,2,3,4,5,6,7,8,9)
console.log(res);
