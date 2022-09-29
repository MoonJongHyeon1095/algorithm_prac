function solution(s){
    let arr = s.split('')

    arr.forEach((v,i) =>  {
        if (v === ' ') arr.splice(i-1, 1, arr[i-1] + ' ');
        })
    
    let answer = arr.join('').split('')
    
    for (let i=0; i < answer.length; i++) {
        if (i%2 === 0) answer[i] = answer[i].toUpperCase();
        else answer[i] = answer[i].toLowerCase();
    }
    return answer.join('').split('  ')
}

let s = 'hang hae ninety nine';
console.log(solution(s))
 