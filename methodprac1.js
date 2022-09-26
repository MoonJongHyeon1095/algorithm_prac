let user = {
    name: "MichaelSnow",
    age: 30
  };
  
  // 함수 선언
  function sayHi() {
    console.log("안녕하세요! 저는 문종현에게 이런 사람으로 기억되고 있습니다.");
  };
  
  // 선언된 함수를 메서드로 등록
  user.sayHi = sayHi;  // <-- 프로퍼티에 함수 이름을 넣어주는 문장을 하나 더 써야 하나 봐
  
  user.sayHi(); // <-- 그리고 user.sayHi 가 user.sayHi() 로 바뀌는 거야.