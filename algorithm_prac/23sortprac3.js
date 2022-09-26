let n = 12345

function solution(n) {
    const arr = n.toString().split('')
    console.log(arr)

    const arr2 = arr.reverse()
    console.log(arr)

    const arr3 = arr2.map(v => Number(v))
    console.log(arr3)

    const arr4 = arr2.map(v => parseInt(v))
    console.log(arr4)

    return arr3;}

console.log(solution(n))