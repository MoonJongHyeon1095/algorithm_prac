//클래스에서 정의할 수 있는 메서드는 생성자, 프로토타입 메서드, 정적 메서드 세가지.

//클래스 선언문
class Jedi {

    //생성자
    constructor(name){
        //1.암묵적으로 인스턴스가 생성되고 this에 바인딩
        //console.log(this); // Jedi{}
        
        //2.this에 바인딩 되어 있는 인스턴스를 초기화한다.
        //인스턴스 생성 및 초기화initialize
        this.name = name; // name 프로퍼티는 public

        //3.인스턴스가 바인딩되어 있는 this를 암묵적으로 반환한다.
    }

    //프로토타입 메서드 : 클래스 몸체에서 정의한 메서드는 인스턴스의 프로토타입에 존재하는 프로토타입 메서드가 됨.
    //상속가능.
    lightSaber(){
        console.log(`${this.name}의 광선검은 초록색`);
    }

    //정적 메서드 : 클래스에 바인딩된 메서드. 클래스는 함수 객체이므로 자신의 프로퍼티, 메서드를 가질 수 있음.
    //프로토타입 체인에 존대하지 않음. 다시말해, 인스턴스로 상속받을 수 없음.
    static force(){
        console.log('may the fore be with you')
    }
}

//인스턴스 생성
const luke = new Jedi('LukeSkywaler')

console.log(luke.name); // 인스턴스 프로퍼티 // LukeSkywaler
luke.lightSaber(); // 프로토타입메서드 // LukeSkywaler의 광선검은 초록색
Jedi.force(); // 정적 메서드 // may the fore be with you
luke.force(); // 인스턴스에서는 정적 메서드를 쓸 수 없어요. // TypeError: luke.force is not a function 

//그래서 정적 메서드는 어디에 쓰일까?
//Math.max(), Number.insNaN(), JSON.stirngfy(), Object.is({},{}) .... 