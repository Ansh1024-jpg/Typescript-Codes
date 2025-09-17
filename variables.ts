//number
let myNum: number = 4;
console.log(myNum.toLocaleString());
//string
let greetings: string  = "Hello World";
console.log(greetings);

//Type inference - The type of the variable is inferred by the compiler.
let myNum2 = 42;
myNum2.toString();


//any

let hero: string;
function getHero(){
    return "Dr.Strange";
}
hero = getHero();
export {}