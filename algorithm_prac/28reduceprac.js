let x =13 

function solution(x) {
    let i = x.toString().split('').reduce((a,b) => a+b) // 각 자리 합
    // let i = x.toString().split('').reduce((a,b) => a+b, 0) 으로 하면 013이 나와 버린다. 0으로 시작하는 문자열을 합친거다.
       return x%i==0 ? true : false;
       
   }
console.log(x.toString().split('')) // 13
console.log(x.toString().split('').reduce((a,b) => a+b)) //그냥 13으로 나와버린다. 문자열을 합친거다.
console.log(solution(x)) // true가 나와버린다!!!!