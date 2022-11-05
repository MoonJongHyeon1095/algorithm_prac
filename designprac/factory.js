/**
 * 생성자 카테고리에 속함
 * 1.새로운 오브젝트를 생성(위임) 그리고 리턴
 * 2.속성, 매개함수를 공유하는 다른 타입의 오브젝트를 생성
 * 3.좀 동적으로 활용할 수 있도록
 */

class Jedi {
 constructor(attrs){
    this._attrs = attrs || {}
 }
 //퍼블릭 함수들 넣는다.
 getName(){
    return this._attrs?.name;
 }
 getSide(){
    return this._attrs?.side; 
 }
 getForce(){
    return this.constructor.name; // Returns the name of the function. Function names are read-only and can not be changed.
 }
}

class Anakin extends Jedi{}
class Luke extends Jedi {}
class Yoda extends Jedi {}

const data = [
    { type : 'Sith', attrs: {name : 'AnakinSkyWalker', side : 'darkside'} },
    { type : 'Jedi', attrs: {name : 'Yoda', side : 'lightside' }},
    { type : 'Jedi', attrs: {name : 'LukeSkywalker', side : 'lightside'} },
    { type : 'Grey', attrs: {name : 'Asoka Tano', side : 'grey'}}
]

class JediFactory {
    typeMap = {
        sith : Sith,
        jedi : Jedi,
        grey : Grey,
    }
    create(props){
        try{
            const force = this.typeMap[props?.type?.toLowerCase()];
            return new force(props.attrs);
        }catch (err) {
            console.error('error creating new', err)
        }
    }
}

const factory = new JediFactory();
const jedi1 = factory.create({
    type : 'Jedi',
    attrs: {name: 'Cortez', side : 'lightside'}
})

console.log(jedi1)
console.log(jedi1.getForce())
console.log(jedi1.getSide())

//보통 이렇게 한번에 데이터 넣어서 새 클래스 생성.
const items = data.map((item)=>factory.create(item));
console.log(items)