//console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//let foo;

//let으로 선언한 변수는 '선언단계'와 '초기화 단계'가 분리되어 진행된다.
//런타임 이전에는 자바스크립트 엔진에 의해 선언단계가 먼저 실행.
//초기화 단계는 변수 선언문에 도달했을 떄 실행.
//초기화 이전에 변수에 접근하려 하면 reference error 발생.
//let 으로 선언한 변수는 스코프 시작지점부터 초기화 단계 시작지점 까지 변수 참조 할 수 없다.


//런타임 이전에 선언단계 실행. 아직 변수 초기화 안됨.
console.log(bar) //reference error

//선언단계와 초기화 단계의 사이. 이곳을 TDZ라 한다.

let bar; // 초기화단계

console.log(bar) //undefined

bar = 1; // 할당 단계

console.log(bar); // 1