interface ApiClientInterface {
    get<T>(path:string, options?: RequestInit):Promise<T>;
    post<T,B>(path:string, body:B):Promise<T>;
    put<T,B>(path: string, body:B):Promise<T>;
    delete<T>(path:string):Promise<T>;
}

interface UserInput {
    name: string;
    email: string;
}

interface User {
    id: string;
    name: string;
    email: string;
}

interface Delete {
    success: boolean;
}

type RequestInterceptor = (
    url: string,
    options: RequestInit
) => RequestInit;

type ResponseInterceptor = (
    response: Response
) => Response;

async function fetchJSON(url:string, options?: RequestInit): Promise<unknown> {
    const response = await fetch(url, options);

    if(!response.ok) throw new Error(`HTTP ${response.status}`)

    return response.json()
}

class ApiClient implements ApiClientInterface {
    private requestInterceptors: RequestInterceptor[] = [];
    private responseInterceptors: ResponseInterceptor[] = [];

    addRequestInterceptor(interceptor: RequestInterceptor): void {
        this.requestInterceptors.push(interceptor);
    }
    addResponseInterceptor(interceptor: ResponseInterceptor): void {
        this.responseInterceptors.push(interceptor);
    }
    private async request(path: string,options: RequestInit = {}): Promise<unknown> {

        const url = `${this.baseURL}${path}`;

        let modifiedOptions = options;

        for (const interceptor of this.requestInterceptors) {
            modifiedOptions = interceptor(url, modifiedOptions);
        }
        const response = await fetch(url, modifiedOptions);

        let modifiedResponse = response;

        for (const interceptor of this.responseInterceptors) {
            modifiedResponse = interceptor(modifiedResponse);
        }

        if (!modifiedResponse.ok) {
            throw new Error(`HTTP ${modifiedResponse.status}`);
        }
        return modifiedResponse.json();
    }


    constructor(private baseURL: string,) {}


    async get<T>(path:string, options: RequestInit ={method: "GET"}):Promise<T>{
        const response = await this.request(path, options)
        return response as T
    }
    async post<T,B>(path:string, body:B):Promise<T>{
        const response = await this.request(
            path, 
            {
                method:"post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }
        )
        return response as T
    }
    async put<T,B>(path: string, body:B):Promise<T>{
        const response = await this.request(
            path,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }
        );
        return response as T;
    }
    async delete<T>(path:string):Promise<T>{
        const response = await this.request(
            path,
            {
                method: "DELETE"
            }
        );
        return response as T;
    }
}
const client = new ApiClient("https://jsonplaceholder.typicode.com")
const addAuth: RequestInterceptor = (url,options) => {
        return {
            ...options,
            headers: {
                ...options.headers,
                Authorization: "Bearer abc123"
            }
        };
};
client.addRequestInterceptor(addAuth)

const logResponse: ResponseInterceptor = (response) => {
        console.log(response.status);

        return response;
    };
client.addResponseInterceptor(logResponse);

const user = await client.get<User>("/users/1");
console.log(user)
const input: UserInput = {
    name: "Akshay",
    email: "akshay@example.com"
};

const user1 = await client.post<User, UserInput>("/users", input);
console.log(user1)
const user2 = await client.put<User, UserInput>("/users/1", input);
console.log(user2)
const result = await client.delete<Delete>("/users/1")
console.log(result)



class MockApiClient implements ApiClientInterface {

    private responses = new Map<string, unknown>();

    setResponse<T>(
        path: string,
        response: T
    ): void {
        this.responses.set(path, response);
    }

    async get<T>(
        path: string
    ): Promise<T> {

        const response = this.responses.get(path);

        return response as T;
    }

    async post<T, B>(
        path: string,
        body: B
    ): Promise<T> {

        const response = this.responses.get(path);

        return response as T;
    }

    async put<T, B>(
        path: string,
        body: B
    ): Promise<T> {

        const response = this.responses.get(path);

        return response as T;
    }

    async delete<T>(
        path: string
    ): Promise<T> {

        const response = this.responses.get(path);

        return response as T;
    }
}

const mockClient = new MockApiClient();

mockClient.setResponse<User>(
    "/users/1",
    {
        id: "1",
        name: "Akshaykkl",
        email: "akshay@example.com"
    }
);

const mockuser = await mockClient.get<User>("/users/1");
console.log(mockuser)
const input2: UserInput = {
    name: "Akshay2",
    email: "akshay2@example.com"
};

const mockuser1 = await mockClient.post<User, UserInput>("/users", input);
console.log(mockuser1)
const mockuser2 = await mockClient.put<User, UserInput>("/users/1", input);
console.log(mockuser2)
const mockresult = await mockClient.delete<Delete>("/users/1")
console.log(mockresult)