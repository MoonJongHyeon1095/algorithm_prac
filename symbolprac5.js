//다른 작업자가 만들어 놓은 객체
const user = {
    name : 'Mike',
    age : 30,
};

//내가 작업
const force = Symbol("May the Force be with you")
user[force] = function(){
    console.log(this.name); 
}

user[force](); //Mike //this.name을 콘솔에 찍으라는 함수이니까. 이렇게  명시적으로 해야만 symbol이 나온다.

// 사용자가 접속하면 보는 메시지
for (let key in user){
    console.log(`His ${key} is ${user[key]}.`);
}
//His name is Mike.
//His age is 30.
// 아주 초보적인 깨달음. 객체[key] 쓰면 value 가 튀어나오는구나....
//하여튼 force 라는 변수로 만든 Symbol 은 for in 으로 key 값을 다 불러도 나오지 않는다.