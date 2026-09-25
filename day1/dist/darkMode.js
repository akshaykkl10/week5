export function darkMode() {
    let mode = localStorage.getItem("mode");
    const darkBtn = document.body.querySelector("#dark-btn");
    if (!darkBtn)
        return;
    darkBtn.addEventListener("click", () => {
        console.log(mode);
        if (mode) {
            if (mode == "dark") {
                mode = "light";
            }
            else if (mode == "light") {
                mode = "dark";
            }
        }
        else {
            mode = "dark";
        }
        document.documentElement.dataset.theme = mode;
        localStorage.setItem("mode", mode);
    });
    window.addEventListener("DOMContentLoaded", () => {
        if (!mode)
            return;
        document.documentElement.dataset.theme = mode;
    });
}
//# sourceMappingURL=darkMode.js.map