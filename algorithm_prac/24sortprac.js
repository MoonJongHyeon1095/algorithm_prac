function solution(n) {
    const arr = n.toString().split('')
    const answer = arr.sort((a,b)=>b-a).map(v => Number(v)).join('')
    return Number(answer);
}