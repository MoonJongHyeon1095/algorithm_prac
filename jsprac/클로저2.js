 //전역 어휘적 환경에 이것들이 들어온다. makeAdder:function, add:초기화X(사용못함)
 
 function makeAdder(x){   
    return function(y){
        return x+y
    }
 }

  
 const add3 = makeAdder(3);   
// makeAdder 함수 어휘적 환경에 x:3
 //전역 어휘적환경에서 add3:makeAdder 내부의 function으로 초기화. 


 console.log(add3(2)); //makeAdder 내부 익명함수 lexical 환경 y:2
 //1.makeAdder 내부 익명함수 lexical 환경 y:2. 그런데 x는 어디서 찾지?
 //2.이후 올라가서 makeAader함수 lexical 환경 x:3
 //3.이후 makeAdder가 뭔지 전역에서 찾음.

 //add3(2)함수가 생성된 이후에도 상위 함수인 makeAdder의 x에 접근해서 값을 찾음.
 //Clouser 란, 함수와 렉시컬 환경의 조합. 함수가 생성될 당시의 외부 변수를 기억, 생성이후에도 계속 접근 가능.