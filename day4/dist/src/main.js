"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
exports.reducer = reducer;
exports.render = render;
const DetailPage_1 = require("@pages/DetailPage");
const Homepage_1 = require("@pages/Homepage");
const ListPage_1 = require("@pages/ListPage");
const SettingsPage_1 = require("@pages/SettingsPage");
const router_1 = require("@router/router");
const store_1 = require("@utils/store");
const tasks = JSON.parse(localStorage.getItem('tasks') || `[]`);
const hashRoute = (0, router_1.getRouteFromHash)();
const intialState = {
    route: hashRoute.path,
    params: hashRoute.params,
    tasks: tasks || []
};
function reducer(state, action) {
    if (action.type == "ROUTE_CHANGED") {
        return {
            ...state,
            route: action.payload.path,
            params: action.payload.params
        };
    }
    if (action.type == "TASK_ADDED") {
        return {
            ...state,
            tasks: [
                ...state.tasks,
                {
                    id: Date.now(),
                    title: action.payload.title
                }
            ]
        };
    }
    if (action.type == "TASK_DELETED") {
        return {
            ...state,
            tasks: state.tasks.filter(task => task.id != action.payload.task.id)
        };
    }
    if (action.type == "TASK_UPDATED") {
        return {
            ...state,
            tasks: state.tasks.map(task => (task.id == action.payload.task.id
                ? { ...task, title: action.payload.task.title }
                : task))
        };
    }
    return state;
}
exports.store = (0, store_1.createStore)(intialState, reducer);
function render() {
    const app = document.body.querySelector("#app");
    if (!app || app == undefined)
        return;
    const state = exports.store.getState();
    let params = {
        state: state,
        dispatch: exports.store.dispatch
    };
    let component = router_1.routes.get(state.route);
    if (state.route.startsWith('/detail')) {
        component = router_1.routes.get('/detail');
    }
    if (!component)
        return;
    if (component == undefined)
        return;
    app.replaceChildren(component(params));
}
exports.store.subscribe(render);
const router = (0, router_1.createRouter)(exports.store.dispatch);
router.register("/", Homepage_1.HomePage);
router.register("/settings", SettingsPage_1.SettingsPage);
router.register("/list", ListPage_1.ListPage);
router.register("/detail", DetailPage_1.DetailPage);
render();
//# sourceMappingURL=main.js.map