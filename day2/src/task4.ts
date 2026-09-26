interface User {
    id: number,
    name: string,
    email: string,
    role: "admin" | "user"
    avatar?: {
        name: string,
        source: string
    }
}

const user1:Readonly<User> = {
    id:1,
    name: "ak",
    email: "ad",
    role: "admin",
    avatar: {
        name: "profile",
        source: "../"
    }
}  
// user1.name = "ak"

type ReadonlyTypes<T> = {
    readonly [K in keyof T]: T[K];
}
const user2: ReadonlyTypes<User> = {
    id:1,
    name: "ak",
    email: "ad",
    role: "admin",
    
}
// user2.avatar = ""

type PartialTypes<T> = {
    [K in keyof T]?: T[K];
}

const user3: PartialTypes<User> = {
    id:1,
    // avatar: {
    //     name:"dp"
    // }
}

type DeepPartial<T> = {
    [K in keyof T]?: NonNullable<T[K]> extends object
        ? DeepPartial<NonNullable<T[K]>>
        : T[K];
};


const user4: DeepPartial<User> = {
    id:1,
    avatar: {
        name:"ak"
    }
}