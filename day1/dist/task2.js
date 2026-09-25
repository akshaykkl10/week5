const name = "Akshay";
const age = 23;
const good = true;
const nullVal = null;
const undefinedVal = undefined;
const symbol = Symbol("this");
const bigNum = 2222222222222222222222222n;
let item;
item = "akshay";
item = "1243";
let data = "hello";
const user = {
    name: "Akshay"
};
const scores = [1, 2, 3];
const scores2 = ["12", "12"];
const tuple = [12, "12"];
function fail(name) {
    throw new Error(name);
}
function logMessage(message) {
    console.log(message);
}
function add(a, b) {
    return a + b;
}
function greet(name) {
    return `Hello ${name}`;
}
function isAdult(age) {
    return age >= 18;
}
function getArrays(...array) {
    while (true) {
    }
}
const greeting = "Hello";
// greeting = "morning"
let greeting2 = "Hello";
greeting2 = "morning";
function processVal(item) {
    if (typeof item == "number") {
        console.log(`${item} is number`);
    }
    if (typeof item == "string") {
        console.log(`${item} is string`);
    }
}
processVal(12);
processVal("12");
export {};
//# sourceMappingURL=task2.js.map