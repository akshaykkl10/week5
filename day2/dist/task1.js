function identity(value) {
    return value;
}
console.log(identity("ak"));
console.log(identity(12));
console.log(identity(true));
function first(value) {
    return value[0];
}
const a = first(["A", "B"]);
const b = first([10, 20]);
const c = first([]);
console.log(a, b, c);
function getLength(value) {
    return value.length;
}
console.log(getLength([1, 2]));
console.log(getLength("ak"));
// console.log(getLength(12))
async function fetchData(url) {
    const result = await fetch(url);
    return result.json();
}
// const response = await fetchData("api/user/1")
// console.log(response)
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    id: 1,
    name: "akshay"
};
console.log(getProperty(user, "name"));
class Queue {
    items = [];
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numbers = new Queue();
numbers.enqueue(1);
numbers.enqueue(2);
console.log(numbers.peek());
console.log(numbers.isEmpty());
numbers.dequeue();
console.log(numbers.peek());
console.log(numbers.isEmpty());
numbers.dequeue();
console.log(numbers.peek());
console.log(numbers.isEmpty());
export {};
//# sourceMappingURL=task1.js.map