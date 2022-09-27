// foreach 로 돌리면서 검사
arr = ['Seoul','Busan','Jeju']
let isExistEoul = false;
arr.forEach(item => {
    if (item=='Seoul') isExistSeoul = true;
})


//set의 내장함수로 검사
let arr2 = new Set(arr)
console.log(arr2.has('Seoul'))