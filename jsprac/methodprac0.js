let user = {
    name: "MichaelSnow",
    age: 30
  };
  
  user.sayHi = function() {
    console.log("잘알려진 구조주의 실험영화의 거장이며 그의 영화 <this>는 여전히 내게 마음 속 부채로 남아있다.");
    }; //함수표현식
  
  user.sayHi(); // 잘알려진 구조주의 실험영화의 거장이며 그의 영화 <this>는 여전히 내게 마음 속 부채로 남아있다.