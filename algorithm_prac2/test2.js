let checkin = [9,9,9,9,7,9,8]
let checkout = [23,23,30,28,30,23,23]

function soluton (checkin,checkout){

arr2 = checkout.map(v => {if(v>=29) {return v=21;} else {return v} })
console.log(arr2)
arr3 = arr2.map((v, i) => {return v - checkin[i]})

return arr3.reduce((a,b) => a+b)
}


console.log(soluton(checkin,checkout))

