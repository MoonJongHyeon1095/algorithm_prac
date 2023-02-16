const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

console.log(Object.keys(user)) // Object.keys 메서드는 객체 property의 key를 배열로 반환한다. 
//[ 'name', 'age', 'gender' ] 

console.log(Object.values(user)) // 반대로. Object.values 메서드는 value를 배열로 반환한다.
//[ 'Mike', 30, 'male' ]

console.log(Object.entries(user)) // key value 배열 반환
//[ [ 'name', 'Mike' ], [ 'age', 30 ], [ 'gender', 'male' ] ]


const arr = [
    ["name", 'Mike'],
    ["age",  30],
    ["gender", 'male'],
]
console.log(Object.fromEntries(arr)) // 반대로, key value 배열을 객체로
// { name: 'Mike', age: 30, gender: 'male' }

const arr2 = [
    ['mon', '월'],
    ['tue', '화'],
];

const result = Object.fromEntries(arr2);

console.log(result); // { mon: '월', tue: '화' }