function getDayName(a,b){
    let date = new Date(2016, (a - 1), b);
    console.log(date)
    console.log(date.toString())
      return date.toString().slice(0, 3).toUpperCase();
  }

console.log(getDayName(5,24));