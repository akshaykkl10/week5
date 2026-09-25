interface User {
    id: number,
    name: string,
    email: string,
    role: "admin" | "viewer" | "editor",
    createdAt: Date,
    avatar?: string
}

const user1: User = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar: "photo"
}
const user2: User = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
}
const user3: User = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar:"hehe"
}
const user4: User = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
}
const user5: User = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    // extra:"extra"
}

const person = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    extra:"extra"
}

// const user6: User = person

type ReadonlyUser = Readonly<User>

const readonlyuser1: ReadonlyUser = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar:"hehe"
}

// console.log(readonlyuser1.name)
// readonlyuser1.name = "rahul"


const userOld: User = {
    id:1,
    name: "akshay",
    email: "akkukkl10",
    role: "admin",
    createdAt: new Date(),
    avatar: "photo"
}
const userNew = {
    name:"akshay kumar"
}

function updateUser(user: User, changes: Partial<User>): User{
    return {...user,...changes};
}
const updatedUser: User = updateUser(userOld, userNew)
console.log(updateUser(userOld, userNew))

interface Employee {
    name: string,
    position: string
}
interface Manager extends Employee {
    power: string
}
type Employees =  {
    name: string,
    position: string
}

type Managers = Employees &  {
    power: string
}

interface Manager {
    powerful: string
    recurse: Employees
}

