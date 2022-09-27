function solution(s) {
    let list = s.split(' ').map((el)=>+(el));
  
    const max_num = Math.max(...list)
    const list2 = [...new Array(max_num)].map((_, i) => i + 1);
  
    const not_prime = [];
    const prime = [];
  
  
    for (let i = 0; i < list.length; i++) {
        list2.find((el) => el !== 1 && el !== list[i] && (list[i] % el === 0)) ? not_prime.push(list[i]) : prime.push(list[i])
    }
  
    return `${Math.max(...prime)} ${Math.min(...not_prime)}`
  }
  
  let s = "97 75 88 99 95 92 73";
  console.log(solution(s))