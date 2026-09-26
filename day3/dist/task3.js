class Shape {
    describe() {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
    static create(type, ...args) {
        switch (type) {
            case "circle":
                if (!args[0])
                    throw new Error("invalid Parameters");
                return new Circle(args[0]);
            case "rect":
                if (!args[0] || !args[1])
                    throw new Error("invalid Parameters");
                return new Rectangle(args[0], args[1]);
            case "triangle":
                if (!args[0] || !args[1])
                    throw new Error("invalid Parameters");
                return new Triangle(args[0], args[1]);
        }
    }
}
// const shape = new Shape("circle")
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    length;
    breadth;
    constructor(length, breadth) {
        super();
        this.length = length;
        this.breadth = breadth;
    }
    area() {
        return this.length * this.breadth;
    }
    perimeter() {
        return 2 * (this.length + this.breadth);
    }
}
class Triangle extends Shape {
    height;
    base;
    constructor(height, base) {
        super();
        this.height = height;
        this.base = base;
    }
    area() {
        return (this.height * this.base) * 0.5;
    }
    perimeter() {
        return this.height + this.base + Math.sqrt((Math.pow(this.height, 2) + Math.pow(this.base, 2)));
    }
}
const circle = Shape.create("circle", 2);
const rect = Shape.create("rect", 2, 2);
const tri = Shape.create("triangle", 2, 2);
console.log(circle.describe());
console.log(rect.describe());
console.log(tri.describe());
export {};
// 1, 2, 4, 8, 16
//# sourceMappingURL=task3.js.map