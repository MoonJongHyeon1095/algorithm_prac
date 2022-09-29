let answer = 0;
let s = "oneone345"

    // 1. 변환하려는 키, 값에 넣어야함
    const list = [
        { index :'0', str : 'zero'},
        { index :'1', str : 'one'},
        { index :'2', str : 'two'},
        { index :'3', str : 'three'},
        { index :'4', str : 'four'},
        { index :'5', str : 'five'},
        { index :'6', str : 'six'},
        { index :'7', str : 'seven'},
        { index :'8', str : 'eight'},
        { index :'9', str : 'nine'}  
    ]



    // 2. 모든문자열 치환 replaceAll
    list.forEach(v => {s= s.replace(v.str, v.index)})

    answer = Number(s);
    
    console.log(s) //1one345 한번밖에 못바꿔줌
