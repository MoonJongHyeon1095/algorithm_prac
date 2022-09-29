function solution(arr, n){
	let obj = {};
    for (let i of arr) {
        obj[i] = (obj[i] || 0) + 1;
    }
    let answer = Object
        .keys(obj)
        .filter( v => obj[v] === 1)
        .map( v => v[n] + v)
        .sort()
        .map(v => v.slice(1))
    
    return answer;
}
let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n=2;
console.log(solution(arr, n))

// ["glass", "yogurt", "coke", "vitamin", "water"]