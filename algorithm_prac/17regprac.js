function solution(s) {
    
    if (s.length == 4 || s.length == 6){
        s+="a";
        return s.match(/\D/gi).length == 1 ? true : false;
    } else {
        return false;
    }
 
}

let s = "1234"
s+="a"
console.log(s.match(/\D/gi))
console.log(s.match(/\D/gi).length)