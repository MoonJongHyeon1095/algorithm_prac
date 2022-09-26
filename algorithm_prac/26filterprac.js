arr = [4,3,2,1]
console.log(Math.min(arr))
console.log(Math.min(... arr))

function solution(arr) {
    const answer = arr.filter(v => v!== Math.min(... arr))

    if (answer.length>0){
        return answer;
    }
    else {return [-1]  //answer.push(-1) ???
        
    }
}

console.log(solution(arr)) 
