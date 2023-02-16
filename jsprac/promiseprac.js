const 약속 = new Promise ((resolve, reject) => {
    //code 
    /* new Promise 는 state 는 pending (대기), result 는 undefined 
    resolve(value) 가 나오면 state 는 fulfilled, result 는 value
    reject(error) 가 나오면 state는 rejected, result는 error*/
})

const 약속1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('OK')
    }, 3000)
});
// state:pending, result undefined -> 3초 후 state:fulfilled, result:OK

const 약속2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error('꺼져!'))
    }, 3000)
});
// state:pending, result undefined -> 3초 후 state:rejected, result:error

/*저 약속들에 대한 대응*/
console.log(약속1.then(
    function(result){console.log(result + '가자!')},  //이행되었을 때 실행하는 콜백
    function(err){console.log(err + '...다시 주문좀')}      //거부되었을 때 실행하는 콜백
))

console.log(약속2.then(
    function(result){console.log(result + '가자!')},  //이행되었을 때 실행하는 콜백
    function(err){console.log(err + '...다시 주문좀')}      //거부되었을 때 실행하는 콜백
))

/*
Promise { <pending> }
Promise { <pending> }
OK가자!
Error: 꺼져!...다시 주문좀*/

console.log(
    약속1.then(function(result){console.log(result + '가자!')})  //이행되었을 때 실행하는 콜백
    .catch(function(err){console.log(err + '...다시 주문좀')}) //거부되었을 때 실행하는 콜백
    )   
//이렇게 then catch 구문으로 나누는게 좋다.

console.log(
    약속1.then(function(result){console.log(result + '가자!')})  //이행되었을 때 실행하는 콜백
    .catch(function(err){console.log(err + '...다시 주문좀')}) //거부되었을 때 실행하는 콜백
    .finally(function(){console.log('--주문 끝--')
    })
)