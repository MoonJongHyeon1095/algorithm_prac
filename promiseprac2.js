// // aka 콜백지옥 콜백헬
// const f1 = (callback) => {
//     setTimeout(function(){
//         console.log('f1 1번 주문 완료');
//         callback();
//     }, 1000);
// }

// const f2 = (callback) => {
//     setTimeout(function(){
//         console.log('f2 2번 주문 완료');
//         callback();
//     }, 1000);
// }

// const f3 = (callback) => {
//     setTimeout(function(){
//         console.log('f3 3번 주문 완료');
//         callback();
//     }, 1000);
// }

// console.log('콜백지옥 시작')
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('콜백지옥 끝');
//         })
//     })
// })


// 프로미스로 같은 짓
const 함수1번 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {res('1번프로미스완료');}, 3000); // 3000ms, 즉 3초
})}

const 함수2번 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {res('2번주문완료');}, 2000); 
})}

const 함수3번 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {res('3번프로미스완료');}, 1000); 
})}

//프로미스 체이닝
// console.log('프로미스시작')
// 함수1번().then((res) => 함수2번(res))
//     .then((res) => 함수3번(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(()=> {
//         console.log('끝');
//     });

//Promise.all([배열을 넣는다.])
console.time('x')
Promise.all([함수1번(), 함수2번(), 함수3번()]).then((res)=>{
    console.log(res);
    console.timeEnd('x'); // 3.003 초 //한꺼번에 시작하기 때문 ㅇㅇ.
});

console.time('시작')
함수1번()
    .then((res) => 함수2번(res))
    .then((res) => 함수3번(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(()=> {
        console.timeEnd('시작') // 6.003초
    });


//Promise.all([배열을 넣는다.])
console.time('시간')
Promise.race([함수1번(), 함수2번(), 함수3번()]).then((res)=>{
    console.log(res);
    console.timeEnd('시간'); //1.008초. Promise.race는 뭐 하나 먼저 끝나면 걍 다 끝냄.
});    