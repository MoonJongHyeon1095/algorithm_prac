const x = 0;
{
  const x = 1;
  console.log(x); // 1
}
console.log(x);   // 0

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0