const max = function (arg, ...rests){
    
    let output

    if (Array.isArray(arg)){
        
        output = Math.max(...arg) // undefined ????
        

    }else if(typeof(arg) === 'number'){
         
        output=Math.max(arg, ...rests)
        
    }
    return output
}

console.log(max([1,2,3,4]))
console.log(max(1,2,3,4))

console.log(`max(배열): ${max([8, 2, 3, 4, 5, 6, 7])}`)     //결과값   max(배열):4
console.log(`max(숫자,...): ${max(5, 2, 3, 4)}`)  //결과값   max(숫자,...):4

