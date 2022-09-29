let nums = [1, 2, 45, 24,789, 54, 43, 912, 5, 7]

let random_idx = Math.floor(nums.length * Math.random() );
const 생성 = [...new Array(1000)].map((_, i) => i + 1);  
let testlist = Array.from({length: 10})
let testlist2 = Array.from({length: 10}).push(Math.floor(nums.length * Math.random()))

console.log(random_idx)
console.log(생성) // [...new Array(1000)].map((_, i) => i + 1); 으로 만든 1000자연수배열
console.log(testlist) // Array.from({length: 10}) 으로 만든 10칸 짜리 빈 배열
console.log(testlist2) // 위 10칸 배열에 난수생성해서 정수로 바꾼것 넣어봄