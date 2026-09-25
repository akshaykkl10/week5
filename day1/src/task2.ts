const name: string = "Akshay";
const age: number = 23;
const good: boolean = true;
const nullVal: null = null;
const undefinedVal: undefined = undefined;
const symbol: symbol = Symbol("this");
const bigNum: bigint = 2222222222222222222222222n;
let item: any;
item = "akshay"
item = "1243"
let data: unknown = "hello";

const user: object = {
    name: "Akshay"
};

const scores: number[] = [1,2,3]
const scores2: Array<string> = ["12","12"]

const tuple: [number, string] = [12, "12"]

function fail(name:string): never {
    throw new Error(name)
}

function logMessage(message: string): void {
    console.log(message);
}

function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return `Hello ${name}`;
}

function isAdult(age: number): boolean {
    return age >= 18
}

function getArrays(...array: number[]): never{
    while (true) {
        
    }
}

const greeting: string = "Hello"
// greeting = "morning"


let greeting2: string = "Hello"
greeting2 = "morning"

function processVal(item: number | string) {
    if (typeof item == "number") {
        console.log(`${item} is number`)
    }
    if (typeof item == "string") {
        console.log(`${item} is string`)
    }
}

processVal(12)
processVal("12")