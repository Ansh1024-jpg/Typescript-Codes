// const user: string[] = []
let user: [string, number, boolean] // Tuple type
user = ["Alice", 25, true]
// user = [25, "Alice", true] // Error: Type 'number' is not assignable to type 'string'.
let rgb: [number, number, number] = [255,0,0]   // RGB color

type User = [number, string]
const newUser: User = [2, "Bob"]

newUser[1] = "John" // Valid
// newUser.push(true) // Valid but bad practice since Tuple is meant to have fixed length

export {}
