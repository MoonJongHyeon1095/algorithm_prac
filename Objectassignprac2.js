// 어떤게 key 가 될지 모르는 객체를 만들 때 유효하다!!!

function makeObj(key, val){
    return {
        [key] : val
    }
}

const obj = makeObj('나이', 33); // 요렇게 위의 함수를 사용할 수 있다.
console.log(obj) // { '나이': 33 }

const obj2 = makeObj('이름', 33); // 요렇게 위의 함수를 사용할 수 있다.
console.log(obj2) // { '이름': 33 }