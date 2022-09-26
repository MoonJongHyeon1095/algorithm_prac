let user = {
    name: "MichaelSnow",
    
    age: 30,
  
    sayHi() {
      // 'this'는 '현재 객체'를 나타냅니다.
      console.log(this.name);
    }
  
  };
  
  user.sayHi(); // MichaelSnow