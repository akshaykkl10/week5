const map: Map<number, number> = new Map();

function fibonacci(n: number): number {
    const cached: number | undefined = map.get(n)
    if (cached != undefined) {
        return cached
    }
    if (n<=0) {
        return 0;
    }
    else if (n==1){
        return 1;
    }
    else {
        let result: number = fibonacci(n-1) + fibonacci(n-2);
        map.set(n,result)
        return result
    }
}

console.time("label")
console.log(fibonacci(40))
console.timeEnd("label")

console.time("label")
console.log(fibonacci(40))
console.timeEnd("label")

console.time("label")
console.log(fibonacci(80))
console.timeEnd("label")

console.time("label")
console.log(fibonacci(110))
console.timeEnd("label")


console.log(map.size)