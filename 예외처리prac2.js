function 몇초후프로미스에러발생(sec){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('error!');
        }, sec*1000);
    })
}



몇초후프로미스에러발생(3)
.then(()=>{
    console.log('done!!!');
    },
    e => {
        console.log('1st catch in then')
        throw new Error('throw in then')
    }
)
.catch((err)=>{
    console.log('2nd catch', err);
})