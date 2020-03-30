/*
有时候我们想去操作某类型的一组值,并且我们知道这组值具有什么属性
这时,可以定义一个接口来描述约束条件
*/

//创建一个包含length属性的接口
interface LengthWise {
    length : number
}

//<T extends LengthWise>这样传入的泛型,必须要有length属性
function getInfo<T extends LengthWise>(info : T) : T {
    console.log(info.length);
    return info
}

// getInfo(10)  字面量10没有length属性,所以报错
getInfo({value : 10,length : 20})  //这样传也是可以的

getInfo("abc")
getInfo([1,2,3,4,5])

export{}
