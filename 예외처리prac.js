function f2(){
    console.log('f2 start');
    throw new Error('에러') // 보통 이렇게 에러 객체를 쓴다. 에러객체에는 에러에 대한 콜스택 정보가 담긴다.
    console.log('f2 end')
}

function f1(){
    console.log('f1 start')
    f2()
    console.log('f1 end')
}

console.log('will : f1')
    try{
    f1();
    }catch(err){
        console.log(err);
    }
console.log('did : f1')