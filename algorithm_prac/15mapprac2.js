// return을 넣지 않으면, 딕셔너리라고 쓴 {id:x.id}의 중괄호가 map 함수의 중괄호로 인식되어서 
// undefined가 출력된다.
const arr = [{id:1, name: 'john'}, {id:2, name: 'james'}]
const result = arr.map((x) => {id:x.id});
console.log(result)

const arr2 = [{id:1, name: 'john'}, {id:2, name: 'james'}]
const result2 = arr.map((x) => {
    return {id:x.name}
});
console.log(result2)

//새 배열에 name만 할당
const result3 = arr.map((x) => x.name);
console.log(result3);

//할당만 하는걸 함수처럼 쓰면 undefined 출력
const result4 = arr.map((x) => {x.name});
console.log(result4);

