/*
可选参数
1.TS里每个函数参数都是必须的
2.这不是指不能传null活undefined作为参数,而是说编译器检查用户是或否为每个参数都传入了值
3.可选参数必须位于必选参数的后边
*/
function max(x : number, y? : number) : number {
    if(y) {
        return x > y ? x : y
    } else {
        return x
    }
}

let res = max(10)
let res1 = max(10,20)

export{}