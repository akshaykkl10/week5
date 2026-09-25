import { greet, version } from "task7lib";

console.log(process.env.NODE_ENV);


const palette = {
    primary: "#0D9488"
} satisfies Record<string, string>;

declare const __APP_VERSION__: string;

interface User {
    id: number,
    name: string
}

const user = {
    id: 1,
    name:"akshay"
} satisfies User

console.log(greet("akshay"))
console.log(version)