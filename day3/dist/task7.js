class Subject {
    observers = [];
    subscribe(observer) {
        this.observers.push(observer);
        return () => {
            const index = this.observers.indexOf(observer);
            if (index != -1)
                this.observers.splice(index, 1);
        };
    }
    next(value) {
        for (const observer of this.observers) {
            observer.next(value);
        }
    }
}
const subject = new Subject();
const unsub1 = subject.subscribe({
    next(value) {
        console.log(`this is ${value}`);
    },
});
const unsub2 = subject.subscribe({
    next(value) {
        console.log(`this is a ${value}`);
    },
});
subject.next(1);
unsub1();
subject.next(10);
export {};
//# sourceMappingURL=task7.js.map