// arr.splice(n,m,x) : 특정요소 지움. n부터 시작, m개. 
// 주의! 배열 splice는 m개수! x요소는 몇개라도 들어가도 됨!
//송민형님의 splice 활용
function solution(s){
    let arr = s.split('')

    arr.forEach((v,i) =>  {
        if (v === ' ') arr.splice(i-1, 1, arr[i-1] + ' '); 
        //배열i-1 번째부터 1개재우고, 배열i-1번째 + 공백다시 더하기 
        //즉, 'g' 'e' 'y'를 지우고 
        })
    console.log(arr) //'g ' 'e ' 'y ' 를 만든 것.
    let answer = arr.join('').split('')
    
    
    for (let i=0; i < answer.length; i++) {
        if (i%2 === 0) answer[i] = answer[i].toUpperCase();
        else answer[i] = answer[i].toLowerCase();
    } 
    console.log(answer)
    return answer.join('')
}

let s = 'hang hae ninety nine';
console.log(solution(s))
 
//arr.splice(n,m) : 삭제된 값 반환 // 주어진 배열은 이렇게 쉽게 가공 가능
let arr1 = [1,2,3,4,5]
let result = arr1.splice(1,2)
console.log(arr1); //[ 1, 4, 5 ]
console.log(result); // [ 2, 3 ]


//arr.slice(n,m) : n부터 m까지 반환, 다만 m은 포함하지 않음. 얘는 문자열과 똑같음.




