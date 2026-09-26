import { format, uppercase } from "fictlib";
const user = {
    id: 1,
    name: "Akshay",
    email: "akshay@example.com",
    age: 24
};
window.appState = {
    user: "Akshay",
    loggedIn: true
};
Array.prototype.sum = function () {
    return this.reduce((sum, value) => sum + value, 0);
};
const numbers = [1, 2, 3];
console.log(numbers.sum());
format("heyyy");
uppercase("hey");
//# sourceMappingURL=task4.js.map