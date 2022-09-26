function solution(a,b){
    let dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];

    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    month = month.slice(0,a)
    let monthSum = month.reduce(function(acc, cur) 
        {return acc + cur;},0);
    let daySum = monthSum - month[a-1] + b -1
    
    
    let today = dayList[daySum%7] 
    
    return today;
}

console.log(solution(5,24))
