type ApiResponse<T> = {
    success: true,
    data: T
} | {
    success: false,
    error: string,
    statusCode: number
}

function handleResponse<T>(response: ApiResponse<T>) {
    if(response.success){
        console.log("wohooooo")
    } else {
        console.log("boooooooooooo")
    }
}

const response: ApiResponse<number[]> = {
    success:true,
    data: [1,2,3,4]
}

handleResponse(response)


type LoadingState<T> = {
    status: "idle"
} | {
    status: "loading"
} | {
    status: "success",
    data: T
} | {
    status: "error",
    error: Error
}

function stateMaker<T>(state: LoadingState<T>) {
    if(state.status == "idle"){
        console.log("idle")
    }
    if(state.status == "loading"){
        console.log("loading")
        
    }
    if(state.status == "success"){
        console.log(state.data)
        
    }
    if(state.status == "error"){
        console.log(state.error.message)
        
    }
}

const currentState1: LoadingState<number[]> = {
    status: "idle"
}
stateMaker(currentState1)
const currentState2: LoadingState<number[]> = {
    status: "loading"
}
stateMaker(currentState2)

const currentState3: LoadingState<number[]> = {
    status: "success",
    data: [1,2,3]
}
stateMaker(currentState3)

const currentState4: LoadingState<number[]> = {
    status: "error",
    error: Error("dont know")
}
stateMaker(currentState4)
