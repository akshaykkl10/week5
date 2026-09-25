const user1 = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar: "photo"
};
const user2 = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
};
const user3 = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar: "hehe"
};
const user4 = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
};
const user5 = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    // extra:"extra"
};
const person = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    extra: "extra"
};
const readonlyuser1 = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar: "hehe"
};
// console.log(readonlyuser1.name)
// readonlyuser1.name = "rahul"
const userOld = {
    id: 1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar: "photo"
};
const userNew = {
    name: "akshay kumar"
};
function updateUser(user, changes) {
    return { ...user, ...changes };
}
const updatedUser = updateUser(userOld, userNew);
console.log(updateUser(userOld, userNew));
export {};
//# sourceMappingURL=task3.js.map