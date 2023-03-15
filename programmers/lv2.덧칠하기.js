let section = [2, 3, 6];
let n = 8;
let m = 4;

// function solution(n, m, section) {
//   //console.log(section.length - 1)
//   let len = section[section.length - 1] - section[0] + 1;
//   //console.log(len)

//   if (len >= m) {
//     let extra = len % m;
//     // console.log(Number(extra))
//     let result = Math.floor(Number(len / m));
//     //console.log(result)
//     return result + extra;
//   } else {
//     return 1;
//   }
// }

function solution(n, m, section) {
  let answer = 0;
  let newLeft = section[0] + m - 1;
  while (section.length) {
    if (section[0] <= newLeft) {
      section.shift();
    } else {
      newLeft = section[0] + m - 1;
      answer += 1;
    }
  }
  return answer + 1;
}

console.log(solution(n, m, section));
