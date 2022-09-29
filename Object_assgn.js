// Object.assign() // 객체 복제

const user = {
    name : 'Mike',
    age : 30,
    [1+4]:5, // 이렇게 식 자체를 넣는 것도 가능하다.
    ["안녕"+"하세요"] : "Hello"
}

const cloneUser = user; // 이러면 복제가 될까? 안된다!
//user 변수에는 객체 자체가 들어가 있는게 아니다. 
//객체가 저장되어 있는 메모리의 주소, 객체에 대한 참조값이 저장된다.
//즉, 이런 클론유저는 객체가 복사되는게 아니라 참조값만 복사되는 거다.

console.log(user.name) // 'Mike' 
cloneUser.name = 'Tom';
console.log(user.name) // 'Tom' // 아래에서는 user.name도 바뀐다!
//하나의 객체를 두 변수가 접근하고 있는 것이다.

const newUser = Object.assign({}, user) 
// 첫번째 빈 객체는 초기값, 두번째 매개변수부터 들어오는 객체들이 초기값에 병합된다.
// 빈객체에 user가 들어오므로, 복제되는 거지.

newUser.name = 'Anakin'
console.log(user.name); // Tom 
// 이제는 newUser의 이름을 바꿔도 원래 user이름에 변화가 없다.

const cloneUser2 = Object.assign({gender:'male'},user); // 성별값이 있는 객체가 user를 병합한다.
//name, age 까지 총 5개의 property를 가지게 된다.
console.log(cloneUser2) 
//{ '5': 5, gender: 'male', name: 'Tom', age: 30, '안녕하세요': 'Hello' }

const cloneUser3 = Object.assign({name:'Luke'},user); //만약 병합을 하는데, key 가 같다면 어떻게 될까?
console.log(cloneUser3)
// { '5': 5, name: 'Tom', age: 30, '안녕하세요': 'Hello' } 걍 덮어씌운다.

