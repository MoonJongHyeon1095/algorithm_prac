const students = []

students.push({이름: '구름', a: 87, b: 98, c: 99})
students.push({이름: '별이', a: 92, b:70, c: 100})

let output = '이름\t총점\t평균\n';

for (const s of students ) {
    const sum = s.a + s.b + s.c
    const average = sum/4
    output += `${s.이름}\t${sum}점\t${average}점\n`
}
console.log(output);