// Symbol.for() : 전역심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 떄문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유.

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id1 === id2) // true 
//for 없이 생성했을 때는 false 였다!!!! //이래서 전역심볼이라 부른다. 코드 어디서든 사용할 수 있다.

const force1 = Symbol.for('Jedi')
const force2 = Symbol.for('Jedi')
console.log(force1 === force2) //true

//이름을 얻고 싶다면
console.log(Symbol.keyFor(force1)) // Jedi
//keyFor(변수명) 메소드를 이용하면, 생성할 때 적어주었던 이름을 알려준다.

//전역심볼이 아닌 심볼은 keyFor 를 사용할 수 없다. 대신 description으로 알려준다.
const force3 = Symbol('sith입니다')
console.log(force3.description) // sith입니다