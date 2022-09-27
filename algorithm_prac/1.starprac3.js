let data = "5 3"
    
const n = data.split(" ");
const a = Number(n[0]), b = Number(n[1]);
const star = `${'*'.repeat(a)}\n`;

console.log(star.repeat(b));
