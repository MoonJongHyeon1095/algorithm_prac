console.log("a".codePointAt(0)) // 97
console.log("z".codePointAt(0)) // 122
console.log("A".codePointAt(0)) // 65
console.log("Z".codePointAt(0)) // 90
console.log(String.fromCodePoint(90)) // Z

console.log(" ".codePointAt(0)) // 32

let s = "a B z"

const arr = new Array(...s)
console.log(arr)

arr.forEach((el) => {
    if( 65 <= el.codePointAt(0) < 90){  //A-Y
        let strnum = el.codePointAt(0) + 1;
        el = String.fromCodePoint(strnum);
    }else if(97<= el.codePointAt(0) < 122 ){  //a-y
        let strnum = el.codePointAt(0) + 1;
        el = String.fromCodePoint(strnum);
    }else if(el.codePointAt==90) { // Z => A  
        el.codePointAt(0) = 65
        el = String.fromCodePoint(65);
    }else if(el.codePointAt==122) { // z => a
        el.codePointAt(0) = 97
        el = String.fromCodePoint(97);
    }else{
        el = String.fromCodePoint(32);
    }
    })

console.log(arr)    
