interface User {
    id: number,
    name: string,
    email: string,
    role: "admin" | "user"
    avatar?: string
}

async function updateUser(user: User, changes:Partial<User>): Promise<User> {
    return {
        ...user,
        ...changes
    }
}

function createUser(user: Required<User>): User {
    return user
}
type UserPreview = Pick<User, "id" | "name" | "email">

function userPreview(user:User): UserPreview {
    return {
        id:user.id,
        name:user.name,
        email:user.email
    }
}

type UserInput = Omit<User, "id" | "role">

function createUser2(user: UserInput): User {
    return {
        id: 1,
        name: user.name,
        email: user.email,
        role: "user",
    }
}

type ConfigKey = "apiKey" | 'apiURL'| "environment" ;

type Config = Record<ConfigKey, string>

const api:Config = {
    apiKey: "54tfygu",
    apiURL: "users/api",
    environment: "git"
}