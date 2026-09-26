async function fetchJSON(url, options) {
    const response = await fetch(url, options);
    if (!response.ok)
        throw new Error(`HTTP ${response.status}`);
    return response.json();
}
class ApiClient {
    baseURL;
    requestInterceptors = [];
    responseInterceptors = [];
    addRequestInterceptor(interceptor) {
        this.requestInterceptors.push(interceptor);
    }
    addResponseInterceptor(interceptor) {
        this.responseInterceptors.push(interceptor);
    }
    async request(path, options = {}) {
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
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async get(path, options = { method: "GET" }) {
        const response = await this.request(path, options);
        return response;
    }
    async post(path, body) {
        const response = await this.request(path, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return response;
    }
    async put(path, body) {
        const response = await this.request(path, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        return response;
    }
    async delete(path) {
        const response = await this.request(path, {
            method: "DELETE"
        });
        return response;
    }
}
const client = new ApiClient("https://jsonplaceholder.typicode.com");
const addAuth = (url, options) => {
    return {
        ...options,
        headers: {
            ...options.headers,
            Authorization: "Bearer abc123"
        }
    };
};
client.addRequestInterceptor(addAuth);
const logResponse = (response) => {
    console.log(response.status);
    return response;
};
client.addResponseInterceptor(logResponse);
const user = await client.get("/users/1");
console.log(user);
const input = {
    name: "Akshay",
    email: "akshay@example.com"
};
const user1 = await client.post("/users", input);
console.log(user1);
const user2 = await client.put("/users/1", input);
console.log(user2);
const result = await client.delete("/users/1");
console.log(result);
class MockApiClient {
    responses = new Map();
    setResponse(path, response) {
        this.responses.set(path, response);
    }
    async get(path) {
        const response = this.responses.get(path);
        return response;
    }
    async post(path, body) {
        const response = this.responses.get(path);
        return response;
    }
    async put(path, body) {
        const response = this.responses.get(path);
        return response;
    }
    async delete(path) {
        const response = this.responses.get(path);
        return response;
    }
}
const mockClient = new MockApiClient();
mockClient.setResponse("/users/1", {
    id: "1",
    name: "Akshaykkl",
    email: "akshay@example.com"
});
const mockuser = await mockClient.get("/users/1");
console.log(mockuser);
const input2 = {
    name: "Akshay2",
    email: "akshay2@example.com"
};
const mockuser1 = await mockClient.post("/users", input);
console.log(mockuser1);
const mockuser2 = await mockClient.put("/users/1", input);
console.log(mockuser2);
const mockresult = await mockClient.delete("/users/1");
console.log(mockresult);
export {};
//# sourceMappingURL=task6.js.map