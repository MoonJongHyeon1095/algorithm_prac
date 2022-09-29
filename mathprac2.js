// isNaN() : NaN인지 아닌지 판단

let x = Number('x'); // NaN //그런데 x가 NaN인지 아닌지 검증하는 방법은 isNaN이 유일하다.
x==NaN //false
x===NaN //false
NaN == NaN //false 비교연산에 싹다 false 뱉어내는 더러운 성질머리 때문.

isNaN(x) // true
isNaN(3) // false

