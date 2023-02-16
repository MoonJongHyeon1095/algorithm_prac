async function asyncPrac() {
    return 'done!';
}

function promisePrac() {
    return new Promise((resolve, reject) => {
    reject('Error!');
    }); 
}

const result = asyncPrac();
console.log(result);

const result2 = promisePrac();
console.log(result2)