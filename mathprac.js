// toString()
// 10진수 -> 2진수 / 16진수

let num = 10;

num.toString(); // "10"
num.toString(2); // "1010" 10의 2진수

let num2 = 255;
num2.toString(16) // "ff" 255의 16진수

//Math.ceil() : 올림
let num3 = 5.1;
let num4 = 5.7;
Math.ceil(num3) // 6
Math.ceil(num4) // 6

//Math.floor() : 내림
Math.floor(num3) // 5
Math.floor(num4) // 5

//Math.round() : 반올림
Math.round(num3) // 5
Math.round(num4) // 6

//소수점 자리수 : 요구사항이 소수점 둘째자리까지 표현, 셋째자리 반올림
let userRate = 30.1234;
Math.round(userRate * 100)/100 //30.12
//100을 곱한다음 3012.34 반올림, 3012에서 다시 100나눔, 30.12

//소수점 자리수 : 요구사항이 소수점 둘째자리까지 표현, 셋째자리 반올림
// toFixed() : 숫자를 인수로 받아 그 숫자만큼 소수점 이하 개수에 반영한다.
let userRate2 = 30.1234;
userRate2.toFixed(2); // "30.12"
userRate2.toFixed(0); // "30"
userRate2.toFixed(6); // "30.1234" //소수 부분 개수보다 큰 숫자를 넣으면 0으로 채운다.

// 통계나 지표작업에서 현업에서 빈번히 쓰인다!
//다만 주의! toFixed()는 문자열을 반환한다.
userRate2.toFixed(2) // "30.12"
Number(userRate2.toFixed(2)) // 30.12 //숫자로 변환해야하는 경우가 잦다.
 