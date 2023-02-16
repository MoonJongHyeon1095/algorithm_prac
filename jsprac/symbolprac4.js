//사실 symbol을 완전히 숨길 수는 없다.
//숨겨진 Symbol key 보는 법

const id = Symbol('id');

const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}

//다음의 장황한 메소드를 사용하면 객체의 숨겨진 심볼이 튀어나온다.
console.log(Object.getOwnPropertySymbols(user)) // [ Symbol(id) ] 

//아래 메소드는 심볼을 포함한 객체의 모든 프로퍼티를 보여준다.
console.log(Reflect.ownKeys(user)) // [ 'name', 'age', Symbol(id) ]

//그러나 대부분의 라이브러리는 저런 메소드 사용하지 않는다. 그러니 symbol로 몰래 넣는거 열심히 해보자.