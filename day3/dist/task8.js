var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    return constructor;
}
function log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey}`);
        console.log(`Arguements: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Returning: ${result}`);
        return result;
    };
}
let User = class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    greet(word) {
        return `Hi, ${this.name}, your ID is ${this.id}`;
    }
};
__decorate([
    log
], User.prototype, "greet", null);
User = __decorate([
    sealed
], User);
const user = new User(1, "Akshay");
user.greet('hola');
export {};
//# sourceMappingURL=task8.js.map