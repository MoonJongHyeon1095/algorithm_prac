//브라우저 환경에서 실행할 것

//전역 변수
var Anakin = "jedi"
//암묵적 전역
luke = 'jedi'
//전역 함수
function Jedi(){}

//var로 선언한 전역 변수는 전역 객체 window의 프로퍼티.
console.log(window.Anakin);// jedi

//전역 객체 window의 프로퍼티는 전역변수처럼 사용 가능.
console.log(Anakin); // jedi

//암묵적 전역도 전역객체 window의 프로퍼티.
console.log(window.luke) // jedi
console.log(luke) // jedi

//함수 선언문으로 정의한 전역 함수도 전역객체 window의 프로퍼티.
console.log(window.Jedi) // ƒ Jedi(){}
console.log(Jedi) // ƒ Jedi(){}

//let, const로 선언한 전역변수는 전역객체 window의 프로퍼티가 아니다.
//렉시컬 환경의 블록 내에 존재한다.
let yoda = "jedi";
const asoka = "jedi";

console.log(window.yoda) // undefined
console.log(yoda) // jedi