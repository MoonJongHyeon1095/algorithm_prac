let arr = ["coke", "water", "glass", "dog", "dog","dog", "yogurt", "vitamin"];
let n =2

let map1 = new Map();

console.log(Boolean(map1.get(1))) // false

for(let i = 0; i < arr.length; i++) {
    let a = arr[i];      
    map1.set(a, (map1.get(a) || 0) + 1);
}
console.log(map1)

/*
Map(6) { 
    'coke' => 1,
    'water' => 1,
    'glass' => 1,
    'dog' => 3,
    'yogurt' => 1,
    'vitamin' => 1
  }
*/

for (let el of map1.keys()) {   
    console.log(el); // coke water glass dog yogurt vitamin
}

for (let el of map1.values()) {
    console.log(el); // 1 1 1 3 1 1
}

for (let [k, v] of map1) {            
    console.log(`${k} goes ${v}`);
}
/*
coke goes 1
water goes 1
glass goes 1
dog goes 3
yogurt goes 1
vitamin goes 1
*/