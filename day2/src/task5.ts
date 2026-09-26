interface KanbanCard {
    id: number,
    task: string,
    column: "todo" | "inprogress" | "done"
}

interface KanbanState {
    cards: KanbanCard[];
}

type KanbanAction = 
    | {
        type: "ADD_CARD";
        payload: {
            card: KanbanCard
        };
    }
    | {
        type: "REMOVE_CARD";
        payload: {
            id: number
        };
    }
    | {
        type: "MOVE_CARD";
        payload: {
            id: number,
            column: KanbanCard["column"]
        };
    }

function reducer(state: KanbanState, action:KanbanAction):KanbanState {
    switch (action.type) {
        case "ADD_CARD":
            return {
                cards:[
                    ...state.cards,
                    action.payload.card
                ]
            }
        case "REMOVE_CARD":
            return {
                cards: state.cards.filter(card => card.id !== action.payload.id)
            }
        case "MOVE_CARD":
            return {
                cards: state.cards.map(card => {
                        if (card.id == action.payload.id) {
                            return{...card, column: action.payload.column}
                        }
                        return card
                    })
            }
        default: 
        return state
    }
}

function createStore<S, A extends {type: string}>(initialState: S, reducer: (state: S, action: A) => S) {
    let state = initialState
    function getState(): S {
        return state
    }
    const subscribers = new Set<Function>()

    function dispatch(action: A): void{
        state = reducer(state, action)
        // localStorage.setItem('cards', JSON.stringify(state))
        subscribers.forEach((subscriber: Function) => {
            subscriber();
        });
    }
    function subscribe(callback: Function): Function {
        subscribers.add(callback);
        return function unsubscribe():void {
            subscribers.delete(callback);
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

const initialState: KanbanState = {
    cards: [
        {
            id:1,
            task: "study typescript",
            column: "inprogress"
        }
    ]
}

const store = createStore<KanbanState, KanbanAction>(initialState, reducer)

store.dispatch({
    type: "ADD_CARD",
    payload: {
        card: {
            id: 2,
            task: "Learn TS",
            column: "todo"
        }
    }
})
console.log(store.getState())

store.dispatch({
    type: "REMOVE_CARD",
    payload: {
        id: 2,
    }
})
console.log(store.getState())
store.dispatch({
    type:"MOVE_CARD",
    payload: {
        id: 1,
        column:"done"
    }
})
console.log(store.getState())
