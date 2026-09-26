function reducer(state, action) {
    switch (action.type) {
        case "ADD_CARD":
            return {
                cards: [
                    ...state.cards,
                    action.payload.card
                ]
            };
        case "REMOVE_CARD":
            return {
                cards: state.cards.filter(card => card.id !== action.payload.id)
            };
        case "MOVE_CARD":
            return {
                cards: state.cards.map(card => {
                    if (card.id == action.payload.id) {
                        return { ...card, column: action.payload.column };
                    }
                    return card;
                })
            };
        default:
            return state;
    }
}
function createStore(initialState, reducer) {
    let state = initialState;
    function getState() {
        return state;
    }
    const subscribers = new Set();
    function dispatch(action) {
        state = reducer(state, action);
        // localStorage.setItem('cards', JSON.stringify(state))
        subscribers.forEach((subscriber) => {
            subscriber();
        });
    }
    function subscribe(callback) {
        subscribers.add(callback);
        return function unsubscribe() {
            subscribers.delete(callback);
        };
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}
const initialState = {
    cards: [
        {
            id: 1,
            task: "study typescript",
            column: "inprogress"
        }
    ]
};
const store = createStore(initialState, reducer);
store.dispatch({
    type: "ADD_CARD",
    payload: {
        card: {
            id: 2,
            task: "Learn TS",
            column: "todo"
        }
    }
});
console.log(store.getState());
store.dispatch({
    type: "REMOVE_CARD",
    payload: {
        id: 2,
    }
});
console.log(store.getState());
store.dispatch({
    type: "MOVE_CARD",
    payload: {
        id: 1,
        column: "done"
    }
});
console.log(store.getState());
export {};
//# sourceMappingURL=task5.js.map