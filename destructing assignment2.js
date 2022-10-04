//객체구조분해 할당
let user = {name : 'M', age : 30}
// let {name, age} = user;
let {age, name} = user; // 순서 바꿔도 ㅇㅋ
console.log(name) // M
console.log(age) // 30
//사실 아래의 이짓 한 것.
//let name = user.name;
//let age = user.age;
//베열구조분해 할당과 같음. 다만 다른점은, 객체구조분해 할당은 순서 상관 없음.

//객체구조분해 : 새로운 변수 이름으로 할당
let {name : userName, age : userAge}=user;
console.log(userName) // M
console.log(userAge) // 30

//객체 구조분해 : 기본값
let U1 = {이름 : 'M', 나이 : 30};
let {이름, 나이, 성별='male'} = U1; 
//걍 기본값 넣어서 undefined 방지하라는 것. 성별이 추가되지는 않음. 무시됨.
console.log(U1) // { '이름': 'M', '나이': 30 }

let U2 = {성명 : 'M', 연세 : 30, 젠더: 'female'} ;
let {성명, 연세, 젠더='male'} = U2;
console.log(젠더) // 'female' //이미 값이 있으면 당연히 덮어씌워짐. 
//U2.젠더 가 아니라 걍 젠더라는 변수 값에 덮어씌워진 거.
