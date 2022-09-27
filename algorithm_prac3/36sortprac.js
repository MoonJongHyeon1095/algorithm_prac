let s = "Zbcdefg"

let n = [...s]
console.log(n)

console.log(
    n.sort((a,b) => b.charCodeAt(0)-a.charCodeAt(0)).join('') )