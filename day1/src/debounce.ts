function debounce(fn: Function, delay: number) {
    const searchInput = document.body.querySelector('#service-search')
    
    if (!searchInput) return
    let timeoutid: ReturnType<typeof setTimeout>;
    searchInput.addEventListener("input", () => {
        clearTimeout(timeoutid)
        timeoutid = setTimeout(() => {
            fn()
        }, delay);
    })
}