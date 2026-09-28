function sealed<T extends abstract new (...args: never[]) => object>(constructor: T){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
    return constructor
}

function log(target: object, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value
    descriptor.value = function(...args: unknown[]): void {
        console.log(`Calling ${propertyKey}`)
        console.log(`Arguements: ${args}`)
        const result = originalMethod.apply(this,args)
        console.log(`Returning: ${result}`)
        return result
    }
}

@sealed
class User {
    constructor(private id: number, private name: string){}
    @log
    greet(word: string){
        return `Hi, ${this.name}, your ID is ${this.id}`
    }
}


const user = new User(1,"Akshay")
user.greet('hola')