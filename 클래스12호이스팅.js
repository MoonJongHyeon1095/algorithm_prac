//딥다이브 421쪽 예제 25-07


const Jedi = '';

{
//호이스팅이 발생하지 않는다면 ''이 출력되어야 한다.
console.log(Jedi)//ReferenceError: Cannot access 'Jedi' before initialization

//클래스 선언문
class Jedi {}
}

/**
 * 클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다.
 * 단, 클래스는 let, const 처럼 호이스팅 된다.
 * 클래스 선언문 이전에 TDZ에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.
 * 
 * var, let, const, function, class 등으로 선언된 모든 식별자는 호이스팅된다.
 * 모든 선언문은 런타임 이전에 먼저 실행되기 때문이다.
 */