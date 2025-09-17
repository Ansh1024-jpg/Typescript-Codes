function addTwo(num: number): number{   //Type Annotation is cumpolsory for function parameters
    return num + 2;
}

function getUpper(val:string): string{
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string): void{

}



let  loginUser = (name: string, email: string, isPaid: boolean): void => {
    if(isPaid === void 0){isPaid = false;}
}


const heros = [1,2,3];

heros.map((hero):string => {
    return `hero is ${hero}`;
})




addTwo(5);
getUpper("hello");
signUpUser("Alice", "alice@test.com", "password123");
loginUser("Bob", "Bob@test.com", false);

export{}