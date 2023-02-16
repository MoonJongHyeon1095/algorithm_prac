//백틱``은 템플릿 리터럴에만 쓰는게 아니다. 백틱은 여러줄을 표현할 수도 있다.
let desc1 = `사랑을 잃고 나는 쓰네
가엾은 내사랑
빈 집에 갇혔네`;

let desc2 = '사랑을 잃고 나는 쓰네\n가엾은 내사랑 빈 집에 갇혔네' 
// 따옴표는 줄바꿈 기호를 써야하고, 한줄로 쓰지 않으면 에러가 난다.

//배열은 하나만 바꿀 수 있었으나 문자는 그게 허용되지 않는다.
let arr = ['a', 'b', 'c']
arr[2] = 'god'
console.log(arr[2]) // god // 바뀐다

let desc3 = 'Anakin'
desc3[2] = 'N'
console.log(desc3[2]) // a //안바뀐다



//toUpporCase() toLowerCase()
let desc4 = "Anakin, May the forece be with you."

console.log(desc4.toUpperCase()); // ANAKIN, MAY THE FORECE BE WITH YOU.
console.log(desc4.toLowerCase()); // anakin, may the forece be with you.




//str.indexOf(txt)
let desc5 = "Living is easy with eyes closed";
console.log(desc5.indexOf('easy')) //10 
//찾는문자가 여러개여도 첫번째e의 위차만 봔환 //찾는 문자 없으면 -1 반환

if(desc5.indexOf('Living')){
    console.log('John Lenon')
}  
//if 문 안의 결과는 0. 즉 false. 따라서 if 문 이후 콘솔명령은 수행되지 않아.

//금칙어 만들기에 응용
function hasSith(str){
    if(str.indexOf('Sith') > -1){    // > -1 조건 추가
        console.log('금칙어가 있다.')
    } else {
        console.log('통과')
    }}
    hasSith('May the force be with you, young Jedi') 
    //-1이 나온다. if문 -1은 트루로 통과되어 버린다. sith가 없는데 금칙어가 있다고 해버린다.
    // 금칙어가 있다. 
    // > -1 조건 추가 후 통과
    hasSith('Anakin Skywalker becomes Sith') 
    // 금칙어가 있다.  // 어차피 0보다 큰 숫자니까.
    // > -1 조건 걸어도 금칙어가 있다.
    hasSith('Sith') 
    //통과
    //왜 이런 결과가? //첫번째는 -1, 세번째는 0. 0은 false라서 금칙어가 아니라 else로 통과된 것.
    // > -1 조건 추가 후 금칙어가 있다. 

 //금칙어 만들기 includes() : 문자 있으면 true 없으면 false
 function hasSith(str){
    if(str.includes('Sith')){    // > -1 조건 추가
        console.log('금칙어가 있다.')
    } else {
        console.log('통과')
    }}
    hasSith('May the force be with you, young Jedi') //통과
    hasSith('Anakin Skywalker becomes Sith')  //금칙어가 있다.
    hasSith('Sith') // 금칙어가 있다.



String.slice(n,m) 
//n은 시작점, m은 양수면 그 숫자까지(포함하지 않음), m이 없으면 걍 문자열 끝까지, m이 음수면 끝에서부터

String.substring(n,m)
//n과 m 사이 문자열 반환. slice와 유사하지만 n과 m 순서 바꿔도 됨.
//음수 허용x. 음수는 0으로 인식.

String.trim() // 문자열 앞뒤 공백제거
String.repeat(n) // 문자열 n번 반복.

//문자열비교
"a".codePointAt(0); //97
String.fromCodePoint(97) // "a"

