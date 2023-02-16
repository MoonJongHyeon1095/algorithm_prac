// for in 구문

const persons = {'임꺽정' : '1', '홍길동' : '345', '김아무개' : ' 2222' };

for (const person in persons) {
  
	console.log(person);
}

//임꺽정
//홍길동
//김아무개


// for of 구문
const people = ['강승현', '홍길동', '김아무개'];
for (const p of people) {
  console.log(p);
}

// const people2 = {'임꺽정' : '1', '홍길동' : '345', '김아무개' : ' 2222' };
// for (const p of people2) {
//     console.log(p); 
//   } 
  //people2 in not iterable

console.log(typeof(people2)) // object


const str = 'works';

for (let v of str) {
  console.log(v); }
 /* w
  o
  r
  k
  s*/

  