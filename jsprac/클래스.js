const Jedi = function(name, age){
 this.name = name;
 this.age = age;
 this.isJedi = true;
// this.force = ()=>{console.log('may the force be with you')};
};

Jedi.prototype.force = function(){console.log('may the force be with you')};

const Anakin = new Jedi('Anakin', 30);
console.log(Anakin)

class Sith {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.isJedi = false;
        
    }
    force(){
        console.log('may the force serve you')
    };
}

const DarthVader = new Sith('DarthVader', 40)
console.log(DarthVader);


class Apprentice extends Sith {
//생성자를 쓰지 않으면 아래의 내용이 사실 생략된 채로 들어가 있는 셈이다.
//constructor(...args){
//   super(...args);
//  };
//
    constructor(name, age, kind){
        super(name, age);
        this.kind = kind;
    }
    lightSaber(){
        console.log('red')
    };
    force(){
        super.force(); 
        console.log("yes, master...") // aka OverRide
    }
};
const sith1 = new Apprentice('sith1', 10, 'human');
console.log(sith1);

sith1.lightSaber(); // red
console.log(sith1.isJedi) // false
sith1.force(); //may the force serve you
                //yes, master...



