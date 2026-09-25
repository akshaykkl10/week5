function processInput(value) {
    if (typeof value == "string") {
        console.log(`${value} is a string`);
    }
    if (typeof value == "number") {
        console.log(`${value} is a number`);
    }
    if (typeof value == "boolean") {
        console.log(`${value} is a boolean`);
    }
    if (typeof value == null) {
        console.log(`${value} is null `);
    }
    if (typeof value == "undefined") {
        console.log(`${value} is undefined `);
    }
}
processInput("Akshay");
processInput(123);
processInput(true);
processInput(null);
processInput(undefined);
function isUser(value) {
    let check = false;
    if (value != null && typeof value == "object") {
        if ("id" in value && "name" in value) {
            if (typeof value.id == "number" && typeof value.name == "string")
                check = true;
        }
    }
    return check;
}
const users = [
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
];
for (let index = 0; index < users.length; index++) {
    if (isUser(users[index])) {
        console.log(users[index]);
    }
}
// | { kind: "triangle"; base: number; height: number };
function assertNever(value) {
    throw new Error("never");
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return 2 * Math.PI * shape.radius;
        case "rect":
            return shape.w * shape.h;
        default:
            return assertNever(shape);
    }
}
const shape1 = {
    kind: "circle",
    radius: 2
};
const shape2 = {
    kind: "rect",
    w: 2,
    h: 2
};
/*
const shape3 : Shape = {
    kind:"triangle",
    height:2,
    base:2
}
*/
console.log(getArea(shape1));
console.log(getArea(shape2));
export {};
// console.log(getArea(shape3))
//# sourceMappingURL=task5.js.map