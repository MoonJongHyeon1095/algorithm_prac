let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      console.log(user.name); // 'this' 대신 'user'를 이용함
    }
  };

  user.sayHi();