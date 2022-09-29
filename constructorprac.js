function User(name, age){   // User 첫글자는 대문자로 // 생성자 함수는 붕어빵 틀
    this.name = name;
    this.age = age;
    this.sayName = function(){   //자기 이름을 말하는 메서드를 추가해보자
        console.log(this.name);
    }
}

let user1 = new User('Mike', 30); // 생성된 객체는 붕어빵
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17); 
let user5 = new User('Han', 40);
user5.sayName(); // 'Han' // 이걸 호출했을 때 sayName 함수의 this는 이 앞의 user5가 된다.

//1. new 함수명(); 을 실행하면
//2. this = {}  //빈 객체를 만들고 this에 할당 //실제로 이 줄은 코드에 없음
//3. this.name = name; //  this.age = age; // this에 property 추가
//4. return this; // 마지막으로 this 를 반환 // 실제로 이 줄은 코드에 없음

//이렇게 쓰는 이유 : 일일이 객체 리터럴을 쓰는 것보다 빠르고 일관성도 있다.
