// isNaN() : NaN인지 아닌지 판단

const m = NaN; // NaN //그런데 x가 NaN인지 아닌지 검증하는 방법은 isNaN이 유일하다.
console.log(m==NaN) //false
console.log(m===NaN) //false
console.log(NaN == NaN) //false 

console.log(isNaN(m)) // true
console.log(isNaN(3)) // false

