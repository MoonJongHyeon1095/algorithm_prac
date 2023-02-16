const 유사배열 = {
	0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

//console.log(유사배열.forEach( v => v+1)) //TypeError: 유사배열.forEach is not a function
 
const result = Array.prototype.push.call(유사배열, 'd')
console.log(result) // 4
console.log(유사배열) // { '0': 'a', '1': 'b', '2': 'c', '3': 'd', length: 4 }


const result2 = Array.from(유사배열, v => v.toUpperCase())
console.log(result2)