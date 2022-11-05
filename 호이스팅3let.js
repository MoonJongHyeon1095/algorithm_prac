

let Anakin = "jedi"

{
    console.log(Anakin); // ReferenceError: Cannot access 'Anakin' before initialization
    let Anakin = "sith"
}

// 호이스팅이 발생하지 않는다면 위 예제는 전역변수 Anakin 의 값 'jedi'를 출력해야 한다.