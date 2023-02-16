// property keys : 문자형 

const obj = {
    1: '1입니다',
    false : '거짓' // key를 숫자나 boolean 형으로 만들어봤자...
}

console.log(Object.keys(obj)); 
// [ '1', 'false' ] // 어차피 문자형으로 반환

//그런데 property key 로 하나 더 가능한게 있다! 그게 symbol!!!!
const a = Symbol(); // new 같은거 필요 없다. symbol은 유일한 식별자를 만들 때 사용한다.
const b = Symbol();

console.log(a) //Symbol()
console.log(b) //Symbol() //요렇게 생긴 것은 같지만...

console.log(a==b) // false // 일치연산자로 확인하면 false가 나온다?!
console.log(a===b) // false

// Symbol : 유일성보장. 전체 코드 중 딱 하나.
const id = Symbol('id'); // sybol 만들 때 괄호 안에 문자열로 설명을 붙여줄 수 있다.
                        // 설명을 붙여놓으면 디버깅할 때 편하다. 그러나 저 문자열은 symbol에 아무 영향미치지 않는다.
const id2 = Symbol('id')
console.log(id === id2) // false // 생긴게 같아도 다르다.
console.log(id == id2) // false 

