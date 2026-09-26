abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
    describe(): string {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
    static create(type: "circle", ...args: number[]): Circle;
    static create(type: "rect", ...args: number[]): Rectangle;
    static create(type: "triangle", ...args: number[]): Triangle;
    static create(type: "circle" | "rect" | "triangle", ...args:number[]): Shape{
        switch (type) {
            case "circle":
                if(!args[0]) throw new Error("invalid Parameters")
                return new Circle(args[0])
            case "rect":
                if(!args[0] || !args[1]) throw new Error("invalid Parameters")
                return new Rectangle(args[0], args[1])
                    
            case "triangle":
                if(!args[0] || !args[1]) throw new Error("invalid Parameters")
                return new Triangle(args[0], args[1])
        }
    }
}
// const shape = new Shape("circle")

class Circle extends Shape {
    constructor(private radius: number){
        super()
    }
    area(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius
    }
}


class Rectangle extends Shape {
    constructor(private length: number, private breadth: number){
        super()
    }
    area(): number {
        return this.length * this.breadth
    }
    perimeter(): number {
        return 2 * (this.length + this.breadth)
    }
}
class Triangle extends Shape {
    constructor(private height: number, private base: number){
        super()
    }
    area(): number {
        return (this.height * this.base) * 0.5
    }
    perimeter(): number {
        return this.height + this.base + Math.sqrt((Math.pow(this.height, 2) + Math.pow(this.base, 2)))
    }
}

const circle: Circle = Shape.create("circle",2) 
const rect: Rectangle = Shape.create("rect",2,2)
const tri: Triangle = Shape.create("triangle",2,2)
console.log(circle.describe())
console.log(rect.describe())
console.log(tri.describe())


// 1, 2, 4, 8, 16