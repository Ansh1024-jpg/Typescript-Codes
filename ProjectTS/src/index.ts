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

    private _courseCount = 1;
    city: string = "";
    constructor(
        public email: string, 
        public name: string,
        private userId: string)
        {

    }

    private deleteToken(){
        console.log("Token deleted")
    }

    get getEmail(): string{
        return `email: ${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNumber){    //A setter cannot have any return type annotation
        if(courseNumber<=1){
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }


}

const Alice = new User("alice@test.com","Alice","alice_id")
Alice.city = "Baku"
// Alice.email  //Cannot access any private property outside the class.