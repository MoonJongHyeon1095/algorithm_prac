function solution(a,b) {

    let answer = ''
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    let date = new Date(2016, a-1, b);
    let someday = date.getDay();
    console.log(someday)
    console.log(typeof(someday))

    answer = days[someday]
    return answer;

}

console.log(solution(5,24))

