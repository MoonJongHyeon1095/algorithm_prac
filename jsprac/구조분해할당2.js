//set-session
var session = {};
var 이름 = 'sparta';
var uniqueInt = Date.now();
session[uniqueInt] = { 이름: 이름 };
console.log(session); // { '1665131963360': { '이름': 'sparta' } }
/**
 * res.cookie('sessionKey', uniqueInt); 에 대한 연습
 * 위의 session을 서버 데이터로만 들고 있고, cookie로는 sessionKey로 uniqueInt만 발행, 탈취되도 문제 없음
 * 실제 중요 내용인 { '이름': 'sparta' } 는 session객체로 서버에서 들고 있음.
 */
//get-session
//const { sessionKey } = req.cookies;
//const name = session[sessionKey];
var 이름이름 = session[uniqueInt];
console.log({ 이름이름: 이름이름 }); // return res.status(200).json({ 이름이름 });
//{ '이름이름': { '이름': 'sparta' } }