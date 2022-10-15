//코드가 실행되면 선언한 변수들이 어휘적 환경 lexical environment 으로 올라간다.
//let으로 선언한 것도 어휘적 환경에 들어왔다. 초기화 initialize 되지 않아 사용 불가. 
//함수선언문은 변수선언과 달리 바로 초기화되어 사용 가능하다. 호이스팅 안됨.
//그러나 변수에 할당한 함수표현식은 초기화 안되어 사용 불가.

let one; // 이 시점까지 오면 사용해도 에러는 안남. 값이 undefined인 거지.
one = 1;


function addOne(num){
    console.log(one + num); 
}

addOne(5); //내부 lexical 환경. 지역변수 num : 5 //이후 젼역 lexical 환경 참조. 전역 변수 one=1
//내부에서 변수 찾고, 없으면 외부, 없으면 전역까지 찾는다.
