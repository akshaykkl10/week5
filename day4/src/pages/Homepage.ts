import type { Action, State } from "@src/types";

export function HomePage(params:{ state: State; dispatch: (action: Action) => void }): HTMLElement {
    const div:HTMLElement = document.createElement('div')
    const page = document.createElement('section')
    const h1 = document.createElement('h1')
    h1.textContent = "Home"
    const p = document.createElement('p')
    p.textContent = "Welcome to the task manager."
    page.append(p)
    div.append(h1, page)
    return div
}