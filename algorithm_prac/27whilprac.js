let num = 1

function solution(num) {
        
    if (num === 1){
        return 0;
    }else{
        let nom = num
        let count = 0    
    
        do {
            nom%2 === 0 ? nom/=2 : nom = nom*3 + 1; 
            count+=1;
            if (count>=500){return -1}; // break 같은 거 안써도 되나?
            }  
        while (nom!==1); // 내가 정반대로 구문을 알고 있었다.
        
        return count;
    }
        
    }

console.log(solution(num))    