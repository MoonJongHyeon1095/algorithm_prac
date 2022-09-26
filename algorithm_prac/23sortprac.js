let n = 12345

function solution(n) {
    const arr = (n + '').split('')
    console.log(arr)
    
    const arr2 = arr.map(parseInt);
    console.log(arr2)
    
    const arr3 = arr.map(value => parseInt(value))
    console.log(arr3)
    return arr3.sort((a,b)=>b-a)

}

console.log(solution(n))