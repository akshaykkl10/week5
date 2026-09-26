import type path from "node:path";

type Route = {
    path: string,
    component: RouteComponent
}
type RouteComponent = (params: Record<string, string>) => HTMLElement;

const routes = new Map<string, Route>()

function getRouteFromHash():{
    path:string,
    params: Record<string, string>
}{
    const path: string = window.location.hash.slice(1) || "/"
    if (path.startsWith("/detail/")) {
        const id = path.split("/")[2];
        if(id)
        return {
            path,
            params: {
                id
            }
        };
    }
    return {
        path,
        params: {}
    }
}
type RouterStore = {
    dispatch: (
        action:{
            type: string,
            payload: {
                path: string,
                params: Record<string, string>
            }
        }
    ) => void
}


function createRouter(store: RouterStore): Record<string,(path: string, component: Route) => void> {
    
    
    function register(path: string, component: Route): void {
        routes.set(path,component)
    }
    function navigate(path: string, params?: Record<string, string>): void {
        window.location.hash = path
    }
    function handleRoute(path: string): void {
        let params: Record<string, string> = {}
        if (path.startsWith('/detail/')){
            const id = path.split("/")[2]
            if (id)
            params = {
                id
            }
        }
        store.dispatch({
            type: "ROUTE_CHANGED",
            payload: {
                path,
                params
            }
        })
    }
    document.addEventListener("click", (event: MouseEvent): void => {
        const target = event.target
        if(!(target instanceof Element)) return
        const link = target.closest("[data-link]");
        if(!link) return;
        event.preventDefault();
        const href = link.getAttribute("href")        
        if(href)
        navigate(href);
    });
    window.addEventListener("hashchange", () => {
        const path = window.location.hash.slice(1)

        handleRoute(path)
    });
    return {
        register
    }
}
