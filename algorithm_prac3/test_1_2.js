function solution(arr1){
	let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let answer = 0;
    let diff = arr2.filter((v,i) => !arr1.includes(v));
    for(let i = Math.min(...diff); i <= Math.max(...diff); i++) answer += i;

	return answer;
}

let arr1=[1,3,5,9,2,4,8,0]
console.log(solution(arr1))