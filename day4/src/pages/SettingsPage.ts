import type { Action, State } from "@src/types";
export function SettingsPage(params:{ state: State; dispatch: (action: Action) => void }): HTMLElement {
    const page: HTMLElement = document.createElement('section')
    const h1 = document.createElement('h1')
    h1.textContent = "Settings"
    const p = document.createElement('p')
    p.textContent = "Application settings"
    page.append(h1, p)
    return page
}