function 몇초후프로미스에러발생(sec){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('error!');
        }, sec*1000);
    })
}

async function asyncPrac() {
    
    console.log(new Date())
    
        const result = await 몇초후프로미스에러발생(3).catch(e => {console.error(e)})
        console.log(result)
    console.log(new Date())
}

const result = asyncPrac();