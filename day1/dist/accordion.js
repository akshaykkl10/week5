export function accordion() {
    const accordSection = document.querySelector('.accordion-section');
    const accordItems = Array.from(document.querySelectorAll('.accordion-title'));
    if (!accordSection)
        return;
    accordSection.addEventListener("click", (event) => {
        const target = event.target;
        if (!target || !target.classList)
            return;
        const accordTitle = target.classList.contains('accordion-title') ? target : null;
        if (!accordTitle)
            return;
        const accordContent = accordTitle.nextElementSibling;
        if (accordContent) {
            accordContent.classList.toggle('opened');
            const accordInner = accordContent.querySelector('.accordion-inner');
            if (accordInner)
                accordInner.classList.toggle('opened');
        }
    });
    window.addEventListener("keydown", (event) => {
        let activeElement = document.activeElement;
        event.preventDefault();
        if (!activeElement)
            return;
        const activeIndex = accordItems.indexOf(activeElement);
        let targetIndex = activeIndex;
        if (event.key === 'Enter' || event.key === "space") {
            activeElement = document.activeElement;
            if (activeElement && activeElement.closest('.accordion')) {
                const content = activeElement.nextElementSibling;
                if (content) {
                    content.classList.toggle('opened');
                    const accordInner = content.querySelector('.accordion-inner');
                    if (accordInner)
                        accordInner.classList.toggle('opened');
                }
            }
            return;
        }
        if (activeElement && activeElement.closest('.accordion')) {
            if (event.key == "ArrowUp") {
                targetIndex = activeIndex == 0 ? accordItems.length - 1 : activeIndex - 1;
            }
            else if (event.key == "ArrowDown") {
                targetIndex = activeIndex == accordItems.length - 1 ? 0 : activeIndex + 1;
            }
            const itemtoFocus = accordItems[targetIndex];
            if (itemtoFocus)
                itemtoFocus.focus();
        }
        else {
            if (event.key == "ArrowUp") {
                targetIndex = accordItems.length - 1;
            }
            else if (event.key == "ArrowDown") {
                targetIndex = 0;
            }
            const itemtoFocus = accordItems[targetIndex];
            if (itemtoFocus)
                itemtoFocus.focus();
        }
    });
}
//# sourceMappingURL=accordion.js.map