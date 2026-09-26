interface AppState {
    user: string;
    loggedIn: boolean;
}
declare global {
    interface Window {
        appState: AppState;
    }
    interface Array<T> {
        sum(): number;
    }
}
export {};
//# sourceMappingURL=task4.d.ts.map