//딥다이브 198쪽

var Anakin = "Jedi"

function Sith(){
    var Anakin = "Sith"
    force()
}

function force(){
    console.log(Anakin);
}

console.log(Sith()) // Jedi //리턴이 없으니 undefined도 찍힘
force() // Jedi

/***
 * 
 * 
 * 1.함수가 어디서 호출됐는지에 따라 스코프가 정해진다면

(aka 동적 스코프 dynamic scope)

force() 함수의 상위 스코프는 Sith() 함수 지역스코프 & 전역스코프. 
그렇다면 아마 "Sith" 가 출력되어야 했다.


2.함수를 어디서 정의했는지에 따라 상위 스코프가 정해진다면

(aka 정적 스코프 static scope, 어휘적 스코프 lexical scope)

함수가 호출된 위치는 상위 스코프 결정에 아무 영향 없다.
어디서 정의됐는지에 따라 결정된다.
따라서 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.

자바스크립트는 렉시컬 스코프를 따른다.
함수 정의가 실행될 때 스코프는 정적으로 결정된다.
함수정의에 의해 생성된 함수객체는 이렇게 결정된 상위 스코프를 기억하고, 호출될 때마다 참조한다.

위 예제에서 force()는 전역에서 정의되었다.
그러므로 코드 실행 전 평가되어 생성된 force 함수의 객체는 자신이 정의된 스코프, 전역 스코프를 기억한다.
force() 함수는 전역 스코프에서의  Anakin을 기억하고 있따.﻿
그러므로 Jedi가 두번 출력된다.
 * 
 * 
 * 
 */