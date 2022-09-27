let lottos = [44, 1, 0, 0, 31, 25]
let win_nums = [31, 10, 45, 1, 6, 19]

// 맞는 수 찾기
let matched_num = []
for(i=0; i<win_nums.length; i++){
    matched_num.push(lottos.filter(v => v==win_nums[i] ) )
}

//지워진 수 찾기
missed_num = lottos.filter(v => v==0)

console.log(matched_num) //[ [ 31 ], [], [], [ 1 ], [], [] ]
console.log(matched_num.filter((v) => v.length !== 0)) // [ [ 31 ], [ 1 ] ]
console.log(missed_num) // [ 0, 0 ]

console.log(matched_num.length) // 6
console.log(missed_num.length) //2

matched_Number = matched_num.filter((v) => v.length !== 0)
console.log(matched_Number.length) //2

min_rank = 7- matched_Number.length // 5 
max_rank = 7- matched_Number.length - missed_num.length; // 3

console.log([max_rank, min_rank])