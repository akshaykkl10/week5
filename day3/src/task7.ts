interface Obesever<T> {
    next(value: T):void;
}

type Unsubscribe = () => void;

interface Observable<T> {
    subscribe(observer: Obesever<T>): Unsubscribe
}

class Subject<T> implements Observable<T> {
    private observers: Obesever<T>[] = []
    subscribe(observer: Obesever<T>): Unsubscribe {
        this.observers.push(observer)
        return () => {
            const index = this.observers.indexOf(observer)
            if(index != -1)this.observers.splice(index, 1)
        }
    }
    next(value: T){
        for (const observer of this.observers){
            observer.next(value)
        }
    }
}

const subject = new Subject<number>()
const unsub1 = subject.subscribe({
    next(value) {
        console.log(`this is ${value}`)
    },
})
const unsub2 = subject.subscribe({
    next(value) {
        console.log(`this is a ${value}`)
    },
})

subject.next(1)

unsub1()

subject.next(10)

