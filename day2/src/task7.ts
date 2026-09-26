
type isArray<T> =  T extends any[] ? true : false;
type flatten<T> = T extends Array< infer item > ? item : T
type flattenExtreme<T> = T extends Array<infer item> ? flattenExtreme<item> : T
type MyAwaited<T> = T extends Promise< infer U > ? MyAwaited<U> : T 

type check = isArray<string>

type flatcheck1 = flatten<string>
type flatcheck2 = flatten<number>
type flatcheck3 = flatten<[1,2,[3,4]]>
type flatcheck5 = flattenExtreme<[1,2,[3,4]]>

type flatcheck4 = flatten<[number, string, boolean, null]>

type await1 = MyAwaited<Promise<number>>

function add(a: number, b:number): number {
    return a + b
}

type Myparameter<T> = T extends (...args: infer P) => any ? P : never;
type RetunrType<T> = T extends (...args: any[]) => infer P ? P : never;

type params = Myparameter<typeof add>
type returns = RetunrType<typeof add>

