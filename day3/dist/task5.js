class TypedEventEmitter {
    listeners = {};
    constructor() { }
    on(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
        return this;
    }
    off(event, listener) {
        if (!this.listeners[event])
            return;
        const events = this.listeners[event];
        if (events)
            events.filter(listenerItem => listenerItem != listener);
    }
    emit(event, ...args) {
        const listeners = this.listeners[event];
        if (!listeners)
            return;
        for (const listener of listeners) {
            listener(...args);
        }
    }
}
const emitter = new TypedEventEmitter();
const user = {
    id: 1,
    name: "Akshay"
};
emitter.on("userAdded", (user) => {
    console.log("User added:", user.name);
});
emitter.on("userRemoved", (user) => {
    console.log("User Removed:", user);
});
emitter.on("userUpdated", (user, user1) => {
    console.log("User updated:", user, user1.name);
});
emitter.emit("userAdded", user);
emitter.emit("userRemoved", "akshay");
emitter.emit("userUpdated", "akshay", user);
export {};
//# sourceMappingURL=task5.js.map