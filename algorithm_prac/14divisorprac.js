function solution(arr, divisor) {
    
    let Cthulu = [];
    let Nyarlathotep = [-1];

    for (i=0; i<arr.length; i++){
        if (arr[i]%divisor === 0) {
            Cthulu.push(arr[i])
        }}
    
    
    if (Cthulu.length >0){
        return Cthulu.sort();
    }
    else{
        return Nyarlathotep;
    }
}

console.log(solution([5, 9, 7, 10], 5))
console.log(solution([2, 36, 1, 3], 1))