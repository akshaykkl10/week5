function debounce(fn, delay) {
    const searchInput = document.body.querySelector('#service-search');
    if (!searchInput)
        return;
    let timeoutid;
    searchInput.addEventListener("input", () => {
        clearTimeout(timeoutid);
        timeoutid = setTimeout(() => {
            fn();
        }, delay);
    });
}
export {};
//# sourceMappingURL=debounce.js.map