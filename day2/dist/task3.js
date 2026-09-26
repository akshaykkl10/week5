function handleResponse(response) {
    if (response.success) {
        console.log("wohooooo");
    }
    else {
        console.log("boooooooooooo");
    }
}
const response = {
    success: true,
    data: [1, 2, 3, 4]
};
handleResponse(response);
function stateMaker(state) {
    if (state.status == "idle") {
        console.log("idle");
    }
    if (state.status == "loading") {
        console.log("loading");
    }
    if (state.status == "success") {
        console.log(state.data);
    }
    if (state.status == "error") {
        console.log(state.error.message);
    }
}
const currentState1 = {
    status: "idle"
};
stateMaker(currentState1);
const currentState2 = {
    status: "loading"
};
stateMaker(currentState2);
const currentState3 = {
    status: "success",
    data: [1, 2, 3]
};
stateMaker(currentState3);
const currentState4 = {
    status: "error",
    error: Error("dont know")
};
stateMaker(currentState4);
export {};
//# sourceMappingURL=task3.js.map