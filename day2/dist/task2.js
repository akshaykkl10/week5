async function updateUser(user, changes) {
    return {
        ...user,
        ...changes
    };
}
function createUser(user) {
    return user;
}
function userPreview(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}
function createUser2(user) {
    return {
        id: 1,
        name: user.name,
        email: user.email,
        role: "user",
    };
}
const api = {
    apiKey: "54tfygu",
    apiURL: "users/api",
    environment: "git"
};
export {};
//# sourceMappingURL=task2.js.map