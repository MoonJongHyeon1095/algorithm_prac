var _a;
var obj1 = { name: '이용우', age: 28, tech: "Node.js" };
//가져올 때 key 값과 property 값이 일치해야 한다.
var name = obj1.name, age = obj1.age, tech = obj1.tech, hair = obj1.hair;
console.log(name);
console.log(age);
console.log(tech);
console.log(hair);
//배열
var arr = ["Node.js", "React", "Spring"];
//가져올 때 변수 이름을 마음대로 선언할 수 있다.
//2개만 선언하면 나머지 값은 변수에 할당되지 않는다.
var 백엔드 = arr[0], 프론트엔드 = arr[1];
console.log(백엔드); // Node.js
console.log(프론트엔드); // React
//배열구조분해할당으로 변수 값 바꿔치기
var a = 1;
var b = 99;
_a = [b, a], a = _a[0], b = _a[1];
console.log(a); // 99
console.log(b); // 1
//쿠키 구조분해할당
var expires = new Date();
expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.
var 쿠키 = { 'name': 'sparta' };
console.log({ 쿠키: 쿠키 }); // { '쿠키': { name: 'sparta' } }
