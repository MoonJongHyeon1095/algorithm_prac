let n = 45

function solution(n) {
    const s = n.toString(3).split('').reverse().join('')
    const answer = s.toString(10)


    return answer;
}

console.log(n.toString(3)) 