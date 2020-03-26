//初体验
function getInfo<T>(info : T) : T {
    return info
}

console.log(getInfo(10))
console.log(getInfo('abc'))
console.log(getInfo(true))
console.log(getInfo(null))

export {}
