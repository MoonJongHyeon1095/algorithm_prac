/**
 * 객체자료형이름.prototype.메소드이름 = fuction(){}
 */

class Jedi { constructor(){ this.저런속성 = 20  }
}

Jedi.prototype.아무속성 = 10
Jedi.prototype.force = ()=> {return console.log('May the force be with you')}

const Yoda = new Jedi
console.log(Yoda.force()) // May the force be with you
console.log(Yoda.아무속성) // 10
console.log(Yoda.저런속성) // 20

const Anakin = new Jedi
Anakin.다른속성 = 30
console.log(Yoda.다른속성) // undefined
console.log(Anakin.다른속성) // 30
console.log(Anakin.force()) // May the force be with you


//indexOf() 메서드가 없는 문자열을 찾을 때 -1을 반환한다는 점을 이용 
console.log("가나다라".indexOf("가")>=0) // true
console.log("가나다라".indexOf("마바")>=0) // false

String.prototype.contain = function(아무매개변수){
    return this.indexOf(아무매개변수) >= 0
}

Array.prototype.contain = function(아무매개변수){
    return this.indexOf(아무매개변수) >= 0
}

const a = "가나다라"
console.log(a.contain('마바사')) // false

const b = [1,2,3,4,5]
console.log(b.contain(6)) // false