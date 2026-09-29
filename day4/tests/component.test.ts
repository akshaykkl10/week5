import { describe, expect, it, vi, beforeEach } from "vitest"
import { Modal } from "../src/components/modal"
// import type { Action, State, RouteComponent } from "../src/types"

describe("Modal", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });
    const dispatch = vi.fn()
    const modal = Modal("Update Task?", 2, dispatch)
    it("Creates Modal with update query", () => {
        const modalComp = modal.querySelector('h2')
        if (modalComp)
        expect(modalComp.textContent).toContain("Update Task?")
    })
    it("submits on form", () => {
        const form = modal.querySelector('form')
        if (!form) return
        const input = form.querySelector('input')
        if (!input) return
        input.value = "New task title"
        form.dispatchEvent(new SubmitEvent("submit",{
            bubbles: true,
            cancelable: true
        }))
        expect(dispatch).toHaveBeenCalledWith({
            type: "TASK_UPDATED",
            payload: {
                task: {
                    id: 2,
                    title: "New task title"
                }
            }
        });
    });
    it("closes the modal on button click", () => {
        const buttons = modal.querySelectorAll("button")
        const closeBtn = buttons[1]
        document.body.append(modal)
        expect(document.body.contains(modal)).toBe(true);
        closeBtn.click()
        expect(document.body.contains(modal)).toBe(false);
    })
    it("closes the modal on Escape", () => {
        document.body.append(modal)
        expect(document.body.contains(modal)).toBe(true);
        const event = new KeyboardEvent("keydown",{
            key: "Escape",
            bubbles: true,
            cancelable: true
        })
        window.dispatchEvent(event)
        expect(document.body.contains(modal)).toBe(false);
    })
    it("nothing on another key", () => {
        document.body.append(modal)
        expect(document.body.contains(modal)).toBe(true);
        const event = new KeyboardEvent("keydown",{
            key: "Enter",
            bubbles: true,
            cancelable: true
        })
        window.dispatchEvent(event)
        expect(document.body.contains(modal)).toBe(true);
    })

})