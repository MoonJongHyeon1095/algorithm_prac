
let id  // 이게 setInterval이랑 setTimeout 에서 자동으로 나온다네....
let count = 0
setInterval(() => {
    console.log(`1초 마다 ${count}번째`)
    count++;
}, 1*1000)

setTimeout(()=> {
    console.log('5초 후')
    clearInterval(id)
}, 5*1000
)