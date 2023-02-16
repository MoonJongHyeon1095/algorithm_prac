const o1 = {name:'kim', score:[1,2]}
const o2 = Object. assign({}, o1);
o2.name = 'lee'

console.log(o1, o2, o1 === o2, o1.score === o2.score) 