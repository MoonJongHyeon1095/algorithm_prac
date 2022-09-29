function solution(arr1){
    let numbers = [...new Array(10)].map((v, i) => i)
    //console.log(numbers) 

    let arr2 = numbers.filter( el => !arr1.includes(el))
    //console.log(arr2)    

    let a = arr2[0]
    let b = arr2[1]
    //console.log(a)
    //console.log(b)

    let res = []
    for(i=a; i<=b; i++){
     res.push(i);
    }
    return res.reduce((a,b) => a+b)
}

let arr1 = [1,3,5,9,2,4,8,0]
console.log(solution(arr1))