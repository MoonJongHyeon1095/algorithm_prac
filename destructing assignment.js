//배열 구조분해 //걍 인덱스 이용해서 찢는 것
let users = ['Mike','Tom','Jane'];
let [user1, user2, user3] = users;

console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'

let str = "M-T-J"
let [u1, u2, u3] = str.split('-')
console.log(u1) // M
console.log(u2) // T
console.log(u3) // J

//배열구조분해 : 기본값 //a,b에만 숫자 대입됨.
//걍 임의의 기본값 직접 넣어서 undefined 방지하라는 것
// let [a,b,c] = [1,2] //c undefined
let [a=3, b=4, c=5] = [1,2]

//배열구조분해 : 일부 반환값 무시
//중간의 공백으로 T 무시, N도 걍 무시
let [o1, ,o2] = ['M', 'T', 'J', 'N']
console.log(o1) // M
console.log(o2) // J

//배열구조분해 : 바꿔치기
let A = 1; let B = 2; //A와 B를 바꿔치고 싶음
let C = A; 
A = B;
B = C; 
console.log(A, B, C) // 2 1 1   //걍 임의의 변수 C를 이용함, 그런데 구조분해 할당은 이딴게 아님

let ㄱ = 1; let ㄴ = 2;
[ㄱ, ㄴ] = [ㄴ, ㄱ]; 
console.log(ㄱ,ㄴ) // 2 1 // 요게 구조분해!!! 


 