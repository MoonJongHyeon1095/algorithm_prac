const supo1 = [1,2,3,4,5]
    const supo2 = [2,1,2,3,2,4,5]
    const supo3 = [3,3,1,1,2,2,4,4,5,5]
 
    const answers = [1,2,3,4,5]

    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;

    for(let i=0; i<answers.length; i++){
        if (supo1[i%5] === answers[i]){answer1+=1;} 
        if (supo2[i%7] === answers[i]){answer2+=1;}
        if (supo3[i%10] === answers[i]){answer3+=1;}
    }
    
    const scoresList = [answer1, answer2, answer3]
    const scoresMap = new Map()
    
    scoresMap.set(1, +answer1).set(2, +answer2).set(3, +answer3)
    console.log(scoresMap.get(1)) // 5
    console.log(scoresMap.get(2)) // 0
    console.log(scoresMap.get(3)) // 0
    console.log(score)
    console.log(scoresList) // 5,0,0
    console.log(Math.max(...scoresList)) // 5
    console.log(scoresList.filter((value) => value==Math.max(...scoresList)).length) // 1
    console.log(scoresList.indexOf(Math.max(...scoresList))) // 0


    let Anakin = []
    if (scoresList.filter((value,index) => value==Math.max(...scoresList)).length > 1){
        if(scoresMap.get(1)===Math.max(...scoresList)){Anakin.unshift(1)}
        if(scoresMap.get(2)===Math.max(...scoresList)){Anakin.unshift(2)}
        if(scoresMap.get(3)===Math.max(...scoresList)){Anakin.unshift(3)}
       return Anakin 

    } else {
        return scoresList.indexOf(Math.max(...scoresList)) + 1
    }




    
        
    
    
