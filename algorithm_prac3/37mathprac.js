let nums = [1,2,7,6,4]
let random_idx = Math.floor(nums.length * Math.random() ); // 이 문제에서는 필요 없다.

function solution(nums){
const arr = []
// 모든 경우의 수가 필요해, 랜덤이 아니라. 
for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
    	for(let k = j+1; k < nums.length; k++) {
            const sum = nums[i] + nums[j] + nums[k];
            console.log(sum);

            isPrime(sum) ? count++ : count
            console.log(count)++
        }
    }
}return answer;
}

//중복 제거
uniq = [...new Set(arr)];
console.log(uniq)

//소수 검사
function isPrime(sum) {
    for(let i = 2; i < sum; i++)
    if(sum % i === 0) return false;
    return true;
}




