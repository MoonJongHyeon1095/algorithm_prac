const data =[
    {"name" : "가나다라"}, {"속성" : "red"}
]

console.log(JSON.stringify(data)) 
// [{"name":"가나다라","속성":"red"},{"name":"마바사아","속성":"blue"}]

console.log(JSON.stringify(data, "속성", 2))

/**
 [
  {
    "name": "가나다라",
    "속성": "red"
  },
  {
    "name": "마바사아",
    "속성": "blue"
  }
]
 */


const data2 =[
    {name : '가나다라', 속성 : 'red'}, {name : '마바사아', 속성 : 'blue'}
]

const json = JSON.stringify(data) // data를 JSON으로 변환
console.log(json) // [{"name":"가나다라","속성":"red"},{"name":"마바사아","속성":"blue"}]

console.log(JSON.parse(json)) // JSON을 다시 자바스크립트 객체로.
//[ { name: '가나다라', '속성': 'red' }, { name: '마바사아', '속성': 'blue' } ]
//표면적인 차이는 key에 따옴표가 있냐 없냐.
//따옴표도 JSON은 유독 큰 따옴표만.