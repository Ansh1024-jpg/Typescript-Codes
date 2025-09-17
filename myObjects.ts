// const User = {
//     name: 'Alice',
//     email: 'alice@example.com',
//     isActive: true
// }

// function createUser({name, isPaid}: {name: string, isPaid: boolean}){}

// createUser({name: 'Bob', isPaid: false})

// let newUser = {name: "John", isPaid: true, email: "John@test.com"}
// createUser(newUser) //Bad behaviour of Typescript Objects


// function createCourse({name, price}: {name: string, price: number}):{name: string, price: number}{
//     return {name: 'TypeScript Course', price: 99}
// }

// createCourse({name: 'Javascript Course', price: 29})

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {}

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string;   //cannot be changed/modified and this is a pure feature of Typescript
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number  //Optional Property
}

let myUser: User = {
    _id: '1234',
    name: 'Alice',
    email: 'alice@example.com',
    isActive: false,
    creditCardDetails: 1234
}

type cardNumber = {
    cardnumber: string;
}
type cardDate = {
    cardate: string;
}
type cardDetails = cardNumber & cardDate & {cvv: number}    //Intersection of types

myUser.email = 'bob@example.com'
// myUser.id = "12345" //cannot add new properties


export {}