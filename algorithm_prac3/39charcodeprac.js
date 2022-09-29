let s = "a B z"
let n = 1

function solution(s, n){
return s.split("").map( (el) => {
        if (el === " ") {
            return el;
        }else{
        return el.toUpperCase().charCodeAt() + n > 90 // Z + n
        ? String.fromCharCode(el.charCodeAt(0) + n - 26) // Z + n - 알파벳길이
        : String.fromCharCode(el.charCodeAt() + n) 
        }
    }).join("");
}

console.log(solution(s, n))