class Jedi{
    //private 필드 정의 //private 필드 정의를 생성자 안에서 하면 에러 난대요.
    #name

    //얘는 걍 프로토타입으로 들어갑니다
    isJedi = true

    constructor(name){
        //private 필드 참조
        this.#name = name;

    }

    //접근자 프로퍼티
    get name(){
        return this.#name
    }
}

const babyYoda = new Jedi('Grogu')
const luke = new Jedi('LukeSkywalker')
//private 필드 #name
//getter를 쓰지 않으면
//console.log(babyYoda.#name) // SyntaxError: Private field '#name' must be declared in an enclosing class

console.log(babyYoda.isJedi) // true
console.log(luke.isJedi) // true
console.log(babyYoda.name) //Grogu
