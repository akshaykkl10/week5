import { describe, expect, it } from "vitest";
import { CommandHistory, CountChanger } from "./task7_2.js";

describe("command", () => {
    it("supports undo and redo",  () => {
        const state = {
            value: 10
        };

        const history = new CommandHistory();
        history.execute(new CountChanger(state));
        history.execute(new CountChanger(state));
        history.execute(new CountChanger(state));
        history.execute(new CountChanger(state));
        history.execute(new CountChanger(state));
        history.undo();
        history.undo();
        history.undo();
        history.redo();
        history.redo();
        history.redo();
        expect(state.value).toBe(15)
    })
    it("supports undo and redo",  () => {
        const state = {
            value: 10
        };

        const history = new CommandHistory();        
        history.redo();
        expect(state.value).toBe(10)
    })
    it("supports undo and redo",  () => {
        const state = {
            value: 10
        };

        const history = new CommandHistory();        
        history.undo();
        expect(state.value).toBe(10)
    })
})