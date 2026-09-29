import { beforeEach, describe, expect, it, vi } from "vitest";
import { createStore } from "../src/utils/store.js";
import { createRouter, getRouteFromHash, routes } from "../src/router/router.js";
import { reducer } from "./store.test.js";
import { Action, State, StoreReturn } from "../src/types.js";
import { HomePage } from "../src/pages/Homepage.js";

const state: State = {
    route: "",
    params: {},
    tasks:[]
}
const store = createStore(
        state,
        reducer
        );

const router = createRouter(store.dispatch)

describe("router", () => {

    beforeEach(() => {
        routes.clear();
        window.location.hash = "";
        document.body.innerHTML = ""; 
    });
    it("registers", () => {
        router.register("/", HomePage)
        expect(routes.get("/")).toBe(HomePage)
    })
    it("gets route from hash", () => {
        window.location.hash = "#/";
        const result = getRouteFromHash()
        expect(result).toEqual({
            path: "/",
            params: {}
        })
    })
    it("handles routes", async () => {
        const dispatch = vi.fn<(action: Action) => void>();
        
        createRouter(dispatch);
        window.location.hash = "#/list";
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                expect(dispatch).toHaveBeenCalledWith({
                    type: "ROUTE_CHANGED",
                    payload: {
                        path: "/list",
                        params: {}
                    }
                });

                resolve();
            }, 0);
        });
    });
    it("routes on detail", async () => {
        const dispatch = vi.fn();

        const store = {
            dispatch
        };
        const router = createRouter(dispatch);
        window.location.hash = "#/detail/42";

        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(dispatch).toHaveBeenCalledWith({
            type: "ROUTE_CHANGED",
            payload: {
                path: "/detail/42",
                params: {
                    id: 42
                }
            }
        });
    });
    it("handles click onlinks", async () => {
        const dispatch = vi.fn();

        const store = {
            dispatch
        };
        createRouter(dispatch);

        const link = document.createElement("a");
        link.href = "/list";
        link.dataset.link = "";
        document.body.append(link);
        const event = new MouseEvent("click", {
            bubbles: true,
            cancelable: true
        });
        link.dispatchEvent(event);
        expect(event.defaultPrevented).toBe(true);
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(dispatch).toHaveBeenCalledWith({
            type: "ROUTE_CHANGED",
            payload: {
                path: "/list",
                params: {}
            }
        });
    })
})