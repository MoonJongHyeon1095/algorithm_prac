function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);

type Player = {
    name:string,
    age?:number
}

const nico : Player = {
    name:"nico"
}
const lynn : Player = {
    name:"lynn",
    age:12
}

const calculator = {
    add : (a: number,b: number) => {a+b},
    sub : function(a: number,b: number){return a-b;},
    mul : (a: number,b: number) => {a*b},
    div : (a: number,b: number) => {a/b}
}


type obj = {
    name:string,
    age:number,
    tech:string,
    hair?:string
}
const obj1 = {name:"이용우", age:28, tech: "Node.js", hair:"black"}