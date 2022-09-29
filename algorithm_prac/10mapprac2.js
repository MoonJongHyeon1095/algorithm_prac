function solution(arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<arr1.length; i++){
        let sum = [];
        for(let j=0; j<arr1[i].length; j++){  //arr1의 [i]번째 요소의 길이만큼 돌리는게 핵심이다. 
            sum.push(arr1[i][j] + arr2[i][j]) //즉, 2칸짜리 요소만 j가 2번 돌아가는 거다.
        }
        answer.push(sum) 
    }
    return answer;
}