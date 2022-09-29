let arr = [1,1,3,3,3,0,0,1,1,1,1]

function solution(arr)
{
    let array = [];
    for(let i=0; i<arr.length; i++){
        if (arr[i]!==arr[i+1]){
            array.push(arr[i])
        }        
    }

    return array;
}

console.log(solution(arr))