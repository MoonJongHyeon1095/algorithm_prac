const arr = [1,2,3,4,5,6,7,8,9,10]

for (const p in arr){
    console.log(p)
}


const AnakinSkywalker = {Jedi:true, Sith:true};

for (const prop in AnakinSkywalker) {
    console.log(`AnakinSkywalker.${prop} = ${AnakinSkywalker[prop]}`);
  }

/*  
AnakinSkywalker.Jedi = true
AnakinSkywalker.Sith = true
*/


function isJedi() {
  this.Jedi = true;
}

isJedi.prototype = AnakinSkywalker;

function show_own_force(객체, 객체이름) {
let result = ""
  for (const 속성 in 객체) {
    if( 객체.hasOwnProperty( 속성 ) ) {     //hasOwnProperty는 boolean 값을 반환함
      result += `${객체이름} 자신의 프로퍼티 ${속성} `;
    }else{
      result+= `상속받은 프로퍼티 ${속성} `;  
    }
  }
  return result;
}

LukeSkywalker = new isJedi();
console.log(show_own_force(LukeSkywalker, "LukeSkywalker")); 
// LukeSkywalker 자신의 프로퍼티 Jedi 상속받은 속성 Sith 