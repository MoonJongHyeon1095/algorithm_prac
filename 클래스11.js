const 시스 = {
    //데이터 프로퍼티
    sithId : 'Darth Vader',
    name : 'Anakin Skywalker',
    lightSaber : 'red',
    master : 'Darth Sidious',

    //getter
    get Name(){
        return `${this.sithId} ${this.name} I am your father....`
    },

    //setter
    set Name(name){
        [this.sithId, this.name] = name.split(' ')
    }
}

//데이터 프로퍼티를 참조하려면
console.log(`${시스.sithId} ${시스.name}`)

//1.접근자 프로퍼티를 통한 프로퍼티 값 저장
//접근자 프로퍼티 Name에 값을 저장하면 setter 함수가 호출된다.
시스.Name = '다스베이더 아나킨'
console.log(시스) 

//2.접근자 프로퍼티를 통한 프로퍼티 값의 참조
//접근자 프로퍼티 Name에 접근하면 getter 함수가 호출된다.
console.log(시스.Name) // 다스베이더 아나킨 I am your father....

