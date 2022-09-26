let data = "5 3"
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log(('*'.repeat(a)+'\n').repeat(b))