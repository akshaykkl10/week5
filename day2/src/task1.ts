function identity<T>(value: T): T {
    return value
}

console.log(identity<string>("ak"))
console.log(identity<number>(12))
console.log(identity<boolean>(true))


function first<T>(value: T[]): T | undefined {
    return value[0]
}
const a = first<string>(["A", "B"]);
const b = first<number>([10, 20]);
const c = first<number>([]);

console.log(a,b,c)

function getLength<T extends {length: number}>(value: T): number {
    return value.length
}
console.log(getLength([1,2]))
console.log(getLength("ak"))
// console.log(getLength(12))

async function fetchData<T>(url:string): Promise<T> {
    const result = await fetch(url)
    return result.json()
}
// const response = await fetchData("api/user/1")
// console.log(response)

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const user = {
    id: 1,
    name: "akshay"
}

console.log(getProperty(user, "name"))

class Queue<T> {
    private items:T[] = []
    enqueue(item:T): void{
        this.items.push(item)
    }
    dequeue(): void{
        this.items.shift()
    }
    peek(): T | undefined{
        return this.items[0]
    }
    isEmpty(): boolean{
        return this.items.length === 0
    }
}
const numbers = new Queue<number>()
numbers.enqueue(1)
numbers.enqueue(2)
console.log(numbers.peek())
console.log(numbers.isEmpty())
numbers.dequeue()
console.log(numbers.peek())
console.log(numbers.isEmpty())
numbers.dequeue()
console.log(numbers.peek())
console.log(numbers.isEmpty())

