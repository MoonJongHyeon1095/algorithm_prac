//객체 
type obj = {
    name:string,
    age:number,
    tech:string,
    hair?:string
}

const obj1 = {name : '이용우', age:28, tech: "Node.js"}

//가져올 때 key 값과 property 값이 일치해야 한다.
const {name, age, tech, hair} = obj1;

console.log(name)
console.log(age)
console.log(tech)
console.log(hair)


//배열
const arr = ["Node.js", "React", "Spring"];

//가져올 때 변수 이름을 마음대로 선언할 수 있다.
//2개만 선언하면 나머지 값은 변수에 할당되지 않는다.
const [백엔드, 프론트엔드] = arr;
console.log(백엔드); // Node.js
console.log(프론트엔드); // React

//배열구조분해할당으로 변수 값 바꿔치기
let a = 1
let b = 99;

[a, b] = [b, a];
console.log(a); // 99
console.log(b); // 1


//쿠키 구조분해할당
const expires = new Date();
expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

const 쿠키 = {'name':'sparta'}
console.log({쿠키})   // { '쿠키': { name: 'sparta' } }
// return res.status(200).json({ 쿠키 }); 에 대한 연습
