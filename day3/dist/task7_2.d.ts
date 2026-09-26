interface Command {
    execute(): void;
    undo(): void;
}
export declare class CountChanger implements Command {
    private readonly target;
    constructor(target: {
        value: number;
    });
    execute(): void;
    undo(): void;
}
export declare class CommandHistory {
    private undoStack;
    private redoStack;
    execute(command: Command): void;
    undo(): void;
    redo(): void;
}
export {};
//# sourceMappingURL=task7_2.d.ts.map