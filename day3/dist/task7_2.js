import { validateHeaderName } from "node:http";
export class CountChanger {
    target;
    constructor(target) {
        this.target = target;
    }
    execute() {
        this.target.value += 1;
    }
    undo() {
        this.target.value -= 1;
    }
}
const state = {
    value: 10
};
export class CommandHistory {
    undoStack = [];
    redoStack = [];
    execute(command) {
        command.execute();
        this.undoStack.push(command);
        this.redoStack = [];
    }
    undo() {
        const command = this.undoStack.pop();
        if (!command)
            return;
        command.undo();
        this.redoStack.push(command);
    }
    redo() {
        const command = this.redoStack.pop();
        if (!command)
            return;
        command.execute();
        this.undoStack.push(command);
    }
}
const history = new CommandHistory();
history.execute(new CountChanger(state));
history.execute(new CountChanger(state));
history.execute(new CountChanger(state));
history.execute(new CountChanger(state));
history.execute(new CountChanger(state));
console.log(state);
history.undo();
console.log(state);
history.undo();
console.log(state);
history.undo();
console.log(state);
history.redo();
console.log(state);
history.redo();
console.log(state);
history.redo();
console.log(state);
//# sourceMappingURL=task7_2.js.map