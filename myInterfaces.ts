interface User{
    readonly dbId: number, //readonly property
    email: string,
    userId: number
    googleId?: string,  //optional property
    // startTrial: () => string, //method    
    startTrial(): string //method
    getCoupon(couponName: string): number //method with parameter
}

const Alice: User = {
    email: "alice@example.com",
    userId: 1,
    dbId: 22,
    startTrial: () => {
        return "Trial started";
    },
    getCoupon:(name: "Coupon10") =>{
        return 10;
    }
}