function double(num) {
    return num * 2;
}
function addOne(num) {
    return num + 1;
}
function pipe(...fns) {
    return (value) => {
        let result = value;
        for (let fn of fns) {
            result = fn(result);
        }
        return (result);
    };
}
console.log('left to right');
console.log(pipe(double, addOne)(5));
console.log(pipe(double, addOne)(2));
console.log(pipe(double, addOne)(8));
export {};
//# sourceMappingURL=pipe.js.map