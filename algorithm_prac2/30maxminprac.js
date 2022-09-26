let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]

function solution(sizes){
    
    let big = Math.max(sizes[0][0], sizes[0][1])
    for (const tag of sizes){
        if (big < tag[0] || big < tag[1]){
            big = tag;            
        }        
    }
    const wallet_width = Math.max(big[0],big[1])

    let long = 

    return wallet  
}

console.log(Math.max(sizes[0][0], sizes[0][1]))