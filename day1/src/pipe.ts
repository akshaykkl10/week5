function double(num: number): number {
    return num * 2;
}

function addOne(num:number):number {
    return num +1;
}

function pipe(...fns:Array<Function>) {
    return (value: number): number => {
        let result:number = value;
        for (let fn of fns){
            result = fn(result) ;
        }
        return(result);
    }
}
console.log('left to right');
console.log(pipe(double,addOne)(5));
console.log(pipe(double,addOne)(2));
console.log(pipe(double,addOne)(8));
