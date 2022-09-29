const participant = ["mislav", "stanko", "mislav", "ana"]
const completion = ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
        console.log(map.get(a))
        console.log(map.get(b))

    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}

console.log(solution(participant, completion)) // mislav