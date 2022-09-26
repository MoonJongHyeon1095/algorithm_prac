const arr = [1, 2, 3];

// res와 res1과 res2는 모두 같다.
const res = [];
for(let i=0; i<arr.length; i++){
    res.push(arr[i]*2)
};
console.log(res)


const res1 = arr.map((value) => {
    return value*2
});
console.log(res1)

const res2 = arr.map((value) => value*2);
console.log(res2)

//인수로 value, index 넣어도 된다.
const res3 = arr.map((value, index) => value*index);
console.log(res3)

//다른 메서드를 안에 넣어도 된다.
const arr_sqrt = [4, 9, 16, 25, 36];
const res4 = arr_sqrt.map(Math.sqrt);
console.log(res4);

//화살표로 하면 쉽다.
const arr_num = [1,2,3,4,5,6,7,8,9];
const res5 = arr_num.map(number => number+2)
console.log(res5)

// 함수 안에서 선언해도 된다.
const arr_num2 = [1,2,3,4,5,6,7,8,9];
const res6 = arr_num2.map(function(v){
    return v * 2;
});
console.log(res6);

//함수 따로 선언해도 된다.
const arr_num3 = [1,2,3,4,5,6,7,8,9];

function 곱하기(v){
    return v*2;
};

const res7 = arr_num3.map(곱하기);
