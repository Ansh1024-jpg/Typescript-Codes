"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
addTwo(5);
getUpper("hello");
signUpUser("Alice", "alice@test.com", "password123");
loginUser("Bob", "Bob@test.com", false);
