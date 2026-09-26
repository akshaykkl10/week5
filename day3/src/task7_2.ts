import { validateHeaderName } from "node:http";

interface Command {
    execute(): void;
    undo(): void;
}

export class CountChanger implements Command {
    constructor(private readonly target: {value: number}){}
    execute(): void {
        this.target.value += 1
    }
    undo(): void {
        this.target.value -= 1
    }
}

const state = {
    value: 10
}

export class CommandHistory {
    private undoStack: Command[] = []
    private redoStack: Command[] = []
    execute(command: Command){
        command.execute()
        this.undoStack.push(command)
        this.redoStack = []
    }
    undo():void {
        const command = this.undoStack.pop()
        if (!command) return
        command.undo()
        this.redoStack.push(command)
    }
    redo():void {
        const command = this.redoStack.pop()
        if (!command) return
        command.execute()
        this.undoStack.push(command)
    }
}

const history = new CommandHistory()
history.execute(new CountChanger(state))
history.execute(new CountChanger(state))
history.execute(new CountChanger(state))
history.execute(new CountChanger(state))
history.execute(new CountChanger(state))
console.log(state)
history.undo()
console.log(state)
history.undo()
console.log(state)
history.undo()
console.log(state)
history.redo()
console.log(state)
history.redo()
console.log(state)
history.redo()
console.log(state)
