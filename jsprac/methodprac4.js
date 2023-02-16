let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      console.log( user.name ); // Error: Cannot read property 'name' of null
    }
  
  };
  
  
  let admin = user;
  user = null; // user를 null로 덮어씁니다.
  
  admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.