let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().split(' ');
// 1. n을 입력 받기 (입력받는 형식은 외우지않아도 됩니다!)


result = ''; //결과값을 문자열에 저장

for (let i = 0; i <= +n; i++) {// 2. 1부터 i를 1씩 증가하며 반복하기
  for (let j = 0; j <= i; j++) { // 3.  i의 갯수 만큼
    result += '*';//별 출력하기
  }
	if(i!=n){// 5. n이라면 줄바꾸지 않기
	  result += '\n';// 4. 줄바꾸기
	}
}

console.log(result);//결과 문자열 출력