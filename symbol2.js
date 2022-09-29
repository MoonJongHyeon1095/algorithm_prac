// property key : 심볼형
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid' //computed property 로 key를 넣었다. Symbol을 드디어 넣어보았다....
}

console.log(user) //{ name: 'Mike', age: 30, [Symbol(id)]: 'myid' }

//그러나 key() 로 한번 key 배열을 가져와 보자고.
console.log(Object.keys(user)) //[ 'name', 'age' ] // 심볼은 어디로 갔나??
console.log(Object.values(user)) // [ 'Mike', 30 ]
console.log(Object.entries(user)) // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]
for(let a in user){} // for in 을 써도 sybol은 건너뛴다!  

 //이렇게 꽁꽁 숨겨진 symbol은 그래서 어디에 써먹는 용도인가?
 //객체의 원본데이터는 건드리지 않고, 속성을 추가할 수 있다.

 //예컨대, 아래 user2 객체에 id2 심볼을 모오올래 추가하는 것.
 const user2 = {
    name : 'Mike',
    age : 30}
 
 const id2 = Sybol('id')   
 user2[id2] = 'myid'; 
 // 코드 어디선가 user2.name = 'myname' 이렇게 멋대로 덮어써버리면 안된다.   
 // 코드 어디선가 user.a_key_no_one_used = 'hahaha'; 이따위 장황한 프로퍼티가 막 들어와도 안된다.
 // 이 객체를 어디선가 Object.keys() 혹은 for in 으로 순회하면서 데이터를 사용하고 있을 수도 있다고.
 // 저렇게 덮어쓰고 추가한 프로퍼티가 어디서 어떻게 튀어나올지 몰라.
