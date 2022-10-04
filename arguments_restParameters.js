//arguments, 나머지 매개변수
function showName(name){
    console.log(name);
}
showName('Mike'); //'Mike'
showName('Mike', 'Tom'); // 'Mike'
showName(); // undefined
//자바스크립트에서 함수에 넘겨주는 인수 개수에는 제한이 없다. 개수 맞출 필요 없다. 
//심지어 비워놔도 된다. 에러 안난다. undefined가 찍힐 뿐이지.

//arguments : 함수로 넘어온 모든 인수에 접근함. 함수 내에서 이ㅣ용 가능한 지역 변수. 
function showYour(name){
    console.log(arguments.length); // 2  
    console.log(arguments[0]) // Mike
    console.log(arguments[1]) // Tom
}
showYour('Mike', 'Tom') 
//length나 index 사용 가능. 그래서 배열일 것 같지만, 배열은 아님. aka Array 형태의 객체.
// 배열이 아니므로 배열의 내장 메서드 없음, forEach나 map 사용 불가.

//나머지 매개변수
function showMe(...names){
    console.log(names);
}
showMe(); // [] // 아무것도 전달하지 않아도 undefined가 아니라 빈 배열!
showMe('Mike') // ['Mike']
showMe('Mike', 'Tom') //['Mike', 'Tom']

/*나머지 매개변수
 전달 받은 모든 수를 받는다.*/
function add(...numbers){
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}
add(1,2,3); // 6
add(1,2,3,4,5,6,7,8,9,10) //55


function User(name, age, ...skills){ // 주의! 나머지 매개변수는 항상 괄호안 마지막에 위치해야함!!!
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User ('M', 30, 'html', 'css')
const user2 = new User ('T', 20, 'JS', 'React')
console.log(user1)
console.log(user2) 
// User { name: 'M', age: 30, skills: [ 'html', 'css' ] }
// User { name: 'T', age: 20, skills: [ 'JS', 'React' ] }