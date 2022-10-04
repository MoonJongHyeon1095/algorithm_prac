//2번이 리젝트 되면? try catch 문으로 감싸야. //에러 콘솔처리 하고 나서 실행 안끝내고 마지막 종료까지 띄움.
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {res('1번프로미스완료');}, 3000); // 3000ms, 즉 3초
})}

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {rej(new Error('err..'));}, 2000); 
})}

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {res('3번프로미스완료');}, 1000); 
})}


console.log('시작')
async function order() {
try{    
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3)
}catch(e){
    console.log(e)
}
    console.log('종료')
}
order()