let score: number | string = 33
score = 44
score  = "55"

type User  = {
    name: string,
    id: number
}


type Admin  = {
    username: string,
    id: number
}

let alice: User | Admin = {
    name: 'Alice',
    id:1
}

alice = {username: "AC", id: 1}

// 
function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    else{
        id + 2
    }
}

getDbId(3)
getDbId("3")

const data: (number | string)[] = ["1", 2, 3, "4"]  // Array of numbers or strings
const data2: number[] | string[] = [1, 2, 3]    // Either all numbers or all strings

let pi:3.14 = 3.14  // Literal type
// pi = 3.15  // Error

let seatAllotment: "aisle" | "middle" | "window"
// seatAllotment = "crew"  // Error