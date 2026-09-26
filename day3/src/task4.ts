import { format, uppercase } from "fictlib";

interface User {
    id: number;
    name: string;
}

interface User {
    email: string;
    age: number;
}

const user: User = {
    id: 1,
    name: "Akshay",
    email: "akshay@example.com",
    age: 24
};


interface AppState {
    user: string;
    loggedIn: boolean;
}

declare global {
    interface Window {
        appState: AppState;
    }
    
    interface Array<T> {
        sum(): number;
    }
}

window.appState = {
    user: "Akshay",
    loggedIn: true
};

Array.prototype.sum = function(): number {
    return this.reduce((sum, value) => sum + value, 0)
}

const numbers: number[] = [1,2,3]
console.log(numbers.sum())
format("heyyy")
uppercase("hey")