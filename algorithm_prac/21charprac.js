const s = "hello world mars"	

function solution(s) {

    let arr = []
    arr = s.split(' ')
    console.log(arr)

    const arr2 = arr.map((v) => v.split("").map((el, idx) => idx%2==0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ')

    return arr2
}

console.log(solution(s))