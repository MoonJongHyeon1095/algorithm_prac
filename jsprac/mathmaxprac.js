
const max = function(array){
let output = []

output.push(Math.max(...array))

return output
}

console.log(...[1,2,3,4])
console.log(max([1,2,3,4]))


// const max = funcion(array) {
//     let outcome = array[0]

//     for(const v of array){
//         if(outcome < v){
//             outcome = v
//         }
//     }
//     return output
// }

// console.log(max([1,2,3,4]))