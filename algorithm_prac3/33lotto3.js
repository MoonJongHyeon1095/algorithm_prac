let lottos = [31, 10, 45, 1, 6, 19]
let win_nums = [31, 10, 45, 1, 6, 19]

// 맞는 수 찾기
let matched_num = []
for(i=0; i<win_nums.length; i++){
    matched_num.push(lottos.filter(v => v==win_nums[i] ) )
}

//지워진 수 찾기
missed_num = lottos.filter(v => v==0)

console.log(matched_num) //[ [], [], [], [], [], [] ]
console.log(matched_num.filter((v) => v.length !== 0)) // []
console.log(missed_num) // [ 0, 0, 0, 0, 0, 0 ]

console.log(matched_num.length) // 6
console.log(missed_num.length) //6

matched_Number = matched_num.filter((v) => v.length !== 0)
console.log(matched_Number.length) //0

min_rank = 7- matched_Number.length // 7
max_rank = 7- matched_Number.length - missed_num.length; // 1

if (min_rank >= 6) {min_rank = 6;} 
if (max_rank <= 1) {max_rank = 1;}
if (matched_Number.length==0 && missed_num.length==0){max_rank=6;}

console.log([max_rank, min_rank])