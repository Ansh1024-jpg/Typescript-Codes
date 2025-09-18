//Classes
// class User {
//     private email: string;
//     name: string;
//     city: string = ""
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    email;
    name;
    userId;
    _courseCount = 1;
    city = "";
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getEmail() {
        return `email: ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
const Alice = new User("alice@test.com", "Alice", "alice_id");
Alice.city = "Baku";
export {};
// Alice.email  //Cannot access any private property outside the class.
//# sourceMappingURL=index.js.map