let n = 'name';
let a = 'age';

const user = {
    [n] : 'Mike', // name : 'Mike'
    [a] : 30, //age : 30 
    //name 대신 [n], age 대신 [a]. 저렇게 대괄호로 묶으면, 변수 a에 할당된 값이 들어간다.
    // 이걸 computed property 계산된 프로퍼티라 부른다.

    [1+4]:5, // 이렇게 식 자체를 넣는 것도 가능하다.
    ["안녕"+"하세요"] : "Hello"
}

console.log(user) // { '5': 5, name: 'Mike', age: 30, '안녕하세요': 'Hello' }
