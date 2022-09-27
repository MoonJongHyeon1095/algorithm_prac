let n = 718253

function solution(n){
    let result =""
    const s = n.toString().split('').reverse().join('+')
    console.log(n.toString().split('').reverse().join('+'))

    const d = n.toString().split('').map(Number).reduce((a, b) => a + b)
    console.log(n.toString().split('').map(Number).reduce((a, b) => a + b))
    return `${s}=${d}`;
}

console.log(solution(n))