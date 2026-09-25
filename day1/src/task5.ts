function processInput(value: string | number | boolean | null | undefined): void {
    if(typeof value == "string") {
        console.log(`${value} is a string`)
    }
    if(typeof value == "number") {
        console.log(`${value} is a number`)
    }
    if(typeof value == "boolean") {
        console.log(`${value} is a boolean`)
    }
    if(typeof value == null) {
        console.log(`${value} is null `)
    }
    if(typeof value == "undefined") {
        console.log(`${value} is undefined `)
    }
}

processInput("Akshay")
processInput(123)
processInput(true)
processInput(null)
processInput(undefined)

function isUser(value: unknown): value is User {
    let check: boolean = false
    if(value != null && typeof value == "object") {
        if("id" in value && "name" in value) {
            if (typeof value.id == "number" && typeof value.name == "string") check = true
        }
    }
    return check
}


type User =  {
    id: number, 
    name: string
}
const users: Array<object> = [
    {
        id: 1,
        name: "akshay"
    },
    {
        id: 1,
        name: null
    },
    {
        id: 1,
        name: "ar"
    },
    {}
]

for (let index = 0; index < users.length; index++) {
    if(isUser(users[index])) {
        console.log(users[index])
    }
    
}


type Shape = {kind:"circle", radius: number} | {kind:"rect", w:number, h:number} 
// | { kind: "triangle"; base: number; height: number };

function assertNever(value: never):never {
    throw new Error("never")
}

function getArea(shape:Shape): number {
    switch (shape.kind) {
        case "circle":
            return 2* Math.PI * shape.radius

        case "rect":
            return shape.w * shape.h
    
        default:
            return assertNever(shape)
    }
}
const shape1: Shape = {
    kind:"circle",
    radius:2
}

const shape2: Shape = {
    kind:"rect",
    w:2,
    h:2
}
/*
const shape3 : Shape = {
    kind:"triangle",
    height:2,
    base:2
}
*/
console.log(getArea(shape1))
console.log(getArea(shape2))
// console.log(getArea(shape3))