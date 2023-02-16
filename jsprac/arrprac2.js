//arr.concat(arr2, arr3...) : 합쳐서 새배열 반환
let arr = [1,2];
console.log(arr.concat([3,4])); //[1,2,3,4]
console.log(arr.concat([3,4][5,6])) //undefined
//안에 병합할 요소 걍 다 넣어도 된다. undefined는 너가 쉼표를 빼먹어서.
console.log(arr.concat([3,4],[5,6]))//[1,2,3,4,5,6] 
console.log(arr.concat([3,4],5,6))//[1,2,3,4,5,6] 
//안에 배열 말고 숫자 같은 거 막 넣어도 다 합친다.


//arr.forEach(fn) : 배열반복
let users = ['Anakin', 'Luke', 'Yoda'];
users.forEach((v, index, arr) => { 
       //해당요소, 요소의 인덱스, users(해당배열)
       console.log(`${index+1}. ${v}`)
 });
//1. Anakin
//2. Luke
//3. Yoda


//arr.indexOf : 문자열의 indexOf와 같다. 해당 요소 인덱스 반환, 없으면 -1 반환
let arr2 = [1,2,3,4,5,1,2,3]
console.log(arr2.indexOf(3)); // 2 // 3번 인덱스 출력
console.log(arr2.indexOf(1,3))// 5
// 인수 2개 넣으면, 두번째 인수는 시작위치. 3번째 인덱스부터 1을 찾으라는 것.
console.log(arr2.lastIndexOf(3)) //7



//arr.includes() : 포함하는지만 확인, true false 반환.


//arr.find(fn) //arr.findIndex(fn) 
//찾는 것은 동일하지만 매개변수로 함수. 더 복잡한 연산으로 찾기 가능. 예컨대 짝수 찾기.
//주의. find()는 첫번째 것만 반환하고 끝
//findIndex는 인덱스를 반환, 없으면 -1
let arr3 = [1,2,3,4,5];
const result = arr3.find((el)=>{    //짝수인 요소 찾기
    return el % 2 ===0;
})
console.log(result) //2 //첫번째 짝수만 찾아 반환하고 끝.

let userList = [
    {name : 'Anakin', age: 134},
    {name : 'Luke', age : 89},
    {name : 'Gurogu', age : 3}
]
const result2 = userList.find((v)=>{
    if (v.age < 19){
        return true;    
        //ture 를 반환한다는게 boolean true 를 반환하는게 아니라... 
        //ture 값을 찾아서 저렇게 객체 전체를 반환하는 거였어?!!!
    }
    return false;
})
console.log(result2) // { name: 'Gurogu', age: 3 }


//arr.filter(fn) : 만족하는 모든 요소를 배열로 반환. 하나만 찾는 find 와 차이점.
const result3 = arr3.filter((el)=>{    //짝수인 요소 찾기
    return el % 2 ===0;
})
console.log(result3) // [ 2, 4 ] //다 찾았다네


