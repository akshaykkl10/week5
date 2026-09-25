export function darkMode(){
    let mode: string | null= localStorage.getItem("mode")
    const darkBtn = document.body.querySelector("#dark-btn")
    if (!darkBtn) return
    darkBtn.addEventListener("click", () => {
        console.log(mode)
        if (mode){
            if (mode == "dark"){
                mode = "light"
            } else if (mode == "light") {
                mode = "dark"
            }
        } else {
            mode = "dark"
        }
        document.documentElement.dataset.theme = mode
        localStorage.setItem("mode", mode)

    });
    window.addEventListener("DOMContentLoaded", ():void => {
        if(!mode) return
        document.documentElement.dataset.theme = mode
    })
}