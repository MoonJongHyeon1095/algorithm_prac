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

// console.time('시작')
// 함수1번()
//     .then((res) => 함수2번(res))
//     .then((res) => 함수3번(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(()=> {
//         console.timeEnd('시작') // 6.003초
//     });

console.log('시작')
async function order() {
    const result1 = await 함수1번();
    const result2 = await 함수2번(result1);
    const result3 = await 함수3번(result2);
    console.log(result3)
    console.log('종료')
}
order()


