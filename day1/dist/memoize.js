const map = new Map();
function fibonacci(n) {
    const cached = map.get(n);
    if (cached != undefined) {
        return cached;
    }
    if (n <= 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        let result = fibonacci(n - 1) + fibonacci(n - 2);
        map.set(n, result);
        return result;
    }
}
console.time("label");
console.log(fibonacci(40));
console.timeEnd("label");
console.time("label");
console.log(fibonacci(40));
console.timeEnd("label");
console.time("label");
console.log(fibonacci(80));
console.timeEnd("label");
console.time("label");
console.log(fibonacci(110));
console.timeEnd("label");
console.log(map.size);
export {};
//# sourceMappingURL=memoize.js.map