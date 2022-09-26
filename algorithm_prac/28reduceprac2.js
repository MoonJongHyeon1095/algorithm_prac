let x =13 

function solution(x) {
    let arr = x.toString().split('')
    let i = arr.map(v=> parseInt(v)).reduce((a,b) => a+b) // 각 자리 합
       return x%i==0 ? true : false;
       
   }

console.log(x.toString().split(''))   
console.log(['1','3'].map(v=> parseInt(v)).reduce((a,b) => a+b))
console.log(solution(x))