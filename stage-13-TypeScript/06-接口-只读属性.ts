//1.只读属性
interface FullName {
    readonly firstName : string
    readonly lastName : string
}

let p : FullName = {firstName : "张",lastName : "三丰"};
console.log(p);
console.log(p.firstName);
// p.firstName = "李"; //报错,只读


//2.只读数组
let arr : number[] = [1,2,3,4]
arr.push(10)
arr.pop()
console.log(arr);


let ra : ReadonlyArray<number> = [1,2,3,4]
console.log(ra);
// ra.push(5) //只读数组不能增加
// ra.pop()

export{}