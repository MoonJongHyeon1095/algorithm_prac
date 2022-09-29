// 여러 객체 병합 가능
const user = {
    name : 'Mike'   
}

const info1 = {
    age : 30,
}

const info2 = {
    gender : 'shemale'
}

const Anakin = Object.assign(user, info1, info2) // user에 info1, info2 병합
console.log(Anakin) // { name: 'Mike', age: 30, gender: 'shemale' }