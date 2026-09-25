class EventEmitter {
    rules: Record<string, Function[]>;
    constructor() {
        this.rules = {};
    }
    on(event: string, listener: Function) {
        if(!this.rules[event]){
            this.rules[event] = [];
        }
        this.rules[event].push(listener);
    }
    off(event: string,listener: Function) {
        const listeners = this.rules[event]
        if(!listeners) return;
        this.rules[event] = listeners.filter(item => item != listener)
    }
    emit(event: string, ...args: Array<unknown>): void {
        const listeners = this.rules[event]
        const wildListeners = this.rules["*"]
        if (!listeners) return
        listeners.forEach(listener => {
            listener(...args)
        });
        if (!wildListeners) return;
        wildListeners.forEach(listener => {
            listener(...args)
        });
    }
    once(event: string, listener: Function){
        if(!this.rules[event]){
            this.rules[event] = [];
        }
        const wrapper = (...args: Array<unknown>): void => {
            this.off(event, wrapper)
            listener(...args)
        }
        this.on(event, wrapper)
    }
}


const login = (name: string) => {
    console.log(`"Welcome, ${name}`)
}
const greet = (name: string) => {
    console.log(`"hey there, ${name}`)
}


const logout = (name: string) => {
    console.log(`"Thank you, ${name}`)
}
const changePassword = (name: string) => {
    console.log("Password changed, ", name)
}

const global = (...args: Array<unknown>) => {
    console.log(args)
}

const eventObj: EventEmitter = new EventEmitter()

eventObj.on("login", login)
eventObj.on("login", greet)
eventObj.on("logout", logout)
eventObj.once("changePassword", changePassword)
eventObj.on("*", global)

eventObj.emit("login", "Akshay")
eventObj.emit("logout", "Akshay")
eventObj.emit("logout", "Akshay")
eventObj.emit("changePassword", "Akshay")
eventObj.emit("changePassword", "Akshay")

eventObj.off("login", greet)
eventObj.off("logout", logout)
eventObj.emit("login", "Akshay")
eventObj.emit("logout", "Akshay")

class UserStore extends EventEmitter {
    users: User[];
    constructor(){
        super()
        this.users = []
    }
    addUser(user: User): void{
        this.users.push(user)
        this.emit("userAdded", user.name)
    }
    removeUser(id:number){
        const idx = this.users.findIndex(user => user.id === id)
        const removedUser: User | undefined= this.users.splice(idx, 1)[0]
        if (!removedUser) return
        this.emit("userRemoved", removedUser.name)
    }
    updateUser(id:number, newUser:User){
        const user:User | undefined = this.users.find(
            user => user.id === id
        )
        if (!user) return
        Object.assign(user, newUser)
        this.emit("userUpdated", user.name)
    }
}

const userStore = new UserStore()

userStore.on("userAdded", (user: User): void => {
    console.log(` HELLO ${user}`)
})
userStore.on("userRemoved", (user: User): void => {
    console.log(` BYE ${user}`)
})
userStore.on("userUpdated", (user: User): void => {
    console.log(` LOOKING GOOD ${user}`)
})
interface User {
    id: number,
    name: string
}

userStore.addUser({
    id:1,
    name:"Akshay"
})

userStore.addUser({
    id:2,
    name:"Sharath"
})

userStore.addUser({
    id:3,
    name:"Jithesh"
})

userStore.removeUser(2)
userStore.updateUser(1, {id:1,name:"Akshay Kumar"})


console.log(userStore.users)