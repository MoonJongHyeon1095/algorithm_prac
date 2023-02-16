const multiplyAll = function (a,b) {
    let n =1
    while (a++<b+1)
    n*=a-1
    return n    
}

console.log(multiplyAll(1,2))
console.log(multiplyAll(3,5))