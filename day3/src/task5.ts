type UserEvents = {
    userAdded: [User];
    userRemoved: [string];
    userUpdated: [string, Partial<User>];
}
interface User {
    id: number,
    name: string
}

class TypedEventEmitter<Events extends Record<string, any[]>> {
    public listeners: { [K in keyof Events]?: Array<(...args: Events[K]) => void> } = {};
    constructor(){}
    on<K extends keyof Events>(event:K, listener:(...args: Events[K]) => void): this {
        if(!this.listeners[event]){
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
        return this
    }
    off<K extends keyof Events>(event:K, listener:(...args: Events[K]) => void) {
        if (!this.listeners[event])return
        const events = this.listeners[event]
        if(events) events.filter(listenerItem => listenerItem != listener)
    }
    emit<K extends keyof UserEvents>(event:K, ...args: Events[K]): void {
        const listeners = this.listeners[event]
        if(!listeners)return
        for (const listener of listeners){
            listener(...args);
        }
    }
}

const emitter = new TypedEventEmitter<UserEvents>()

const user: User = {
    id: 1,
    name: "Akshay"
}

emitter.on("userAdded", (user) => {
    console.log("User added:", user.name);
});

emitter.on("userRemoved", (user) => {
    console.log("User Removed:", user);
});

emitter.on("userUpdated", (user, user1) => {
    console.log("User updated:", user, user1.name);
});

emitter.emit("userAdded", user)
emitter.emit("userRemoved", "akshay")
emitter.emit("userUpdated", "akshay", user)