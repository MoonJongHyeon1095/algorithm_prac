let data = "5 3"

const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let star = [];
    for (let i=0; i<a; i++){
        star.push("*")
        console.log(star)
     };

     for (let i=0; i<b; i++){
        console.log(star.join(""));
     };

