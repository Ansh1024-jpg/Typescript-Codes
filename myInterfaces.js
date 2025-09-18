var Alice = {
    email: "alice@example.com",
    userId: 1,
    githubToken: "ghp_ABC123",
    dbId: 22,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
var Bob = {
    email: "",
    userId: 3,
    role: "Admin",
    githubToken: "",
    dbId: 33,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
