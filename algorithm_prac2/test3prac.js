let s = "97 75 88 99 95 92 73";

const list = s.split(' ').map(Number) 
// let list = s.split(' ').map((el)=>+(el));
console.log(list) //[97, 75, 88, 99, 95, 92, 73]
console.log(...list) // 97 75 88 99 95 92 73

const max_num = Math.max(...list)
console.log(max_num) // 99

//console.log(new Array.max_num) // Array.max_num is not a constructor
console.log(new Array(max_num)) // [ <99 empty items> ]

const 생성배열 = [...new Array(max_num)].map((_, i) => i + 1);
console.log(생성배열) // [1,  2,  3, ~ 94, 95, 96, 97, 98, 99] 숫자 배열 만들어짐!!

const not_prime = [];
const prime = [];

for (let i = 0; i < list.length; i++) {
    생성배열.find((el) => el !== 1 && el !== list[i] && (list[i] % el === 0)) ? not_prime.push(list[i]) : prime.push(list[i])
} 
// for문을 돌면서 생성배열의 1~99 중 여기에 해당되는게 있는지 검사
// 1)일단 1이 아닌 숫자로 검사, 2)검사대상인 리스트의 숫자 자기자신이 아닌 것, 
// 3) 리스트의 숫자의 약수인 것, 즉 리스트%생성배열숫자 나머지가 0인 것
// 그런데, 3)만 넣어도 되지 않나?

console.log(prime) // [ 97, 73 ]
console.log(not_prime) // [ 75, 88, 99, 95, 92 ]
console.log(`${Math.max(...prime)} ${Math.min(...not_prime)}`)
  
