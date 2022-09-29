let strings = 	["sun", "bed", "car"]
let n = 1


console.log( strings.sort().sort((a,b) => a.charCodeAt(n) - b.charCodeAt(n)) )