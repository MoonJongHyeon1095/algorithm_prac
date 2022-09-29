function solution(arr, n){

let map1 = new Map();
for(let i = 0; i < arr.length; i++) {
    let a = arr[i];      
    map1.set(a, (map1.get(a) || 0) + 1);
}
//console.log(map1)

let map2 = new Map([...map1].filter(([k, v]) => v < 2 ));
//console.log(...map2)

let arr2 = Array.from (map2.keys())
//console.log(arr2)

return(arr2.sort().sort((a,b) => a.charCodeAt(n) - b.charCodeAt(n)))
}

let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n =2

console.log(solution(arr, n))