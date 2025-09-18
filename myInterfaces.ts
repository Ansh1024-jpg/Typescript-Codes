interface User{
    readonly dbId: number, //readonly property
    email: string,
    userId: number
    googleId?: string,  //optional property
    // startTrial: () => string, //method    
    startTrial(): string //method
    getCoupon(couponName: string, value: number): number //method with parameter
}


interface User{
    githubToken: string //adding another property to the same interface - Reopening interface
}

interface Admin extends User{   //interface inheritance
    role: "Admin"|"TA"|"Learner"
}

const Alice: User = {
    email: "alice@example.com",
    userId: 1,
    githubToken: "ghp_ABC123",
    dbId: 22,
    startTrial: () => {
        return "Trial started";
    },
    getCoupon:(name: "Coupon10", off: 0.1) =>{
        return 10;
    }
}

const Bob: Admin = {
    email: "",
    userId: 3,
    role: "Admin",
    githubToken: "",
    dbId: 33,
    startTrial: () => {
        return "Trial started";
    },
    getCoupon:(name: "Coupon10", off: 0.1) =>{
        return 10;
    }
}