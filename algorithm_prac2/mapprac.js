//배열 선언
let numbers = [273, 52, 103, 32, 57]

//제곱
numbers = numbers.map(function(value,index,arry){
    return value*value
})

numbers.forEach(console.log) // 매개변수가 콘솔로그 메소드