const c = 273
c.속성 = 10
console.log(c.속성) // undefined //기본자료형은 프로퍼티를 가질 수 없다.

const n = new Number(273)
const s = new String('안녕')
const b = new Boolean(true)

console.log(typeof(n)) //object
console.log(typeof(s)) //object
console.log(typeof(b)) //object

n.속성 = 10
console.log(n) //[Number: 273] { '속성': 10}
console.log(n.valueOf()) // 273




