
 
 export function accordion (): void{
    const accordSection = document.querySelector('.accordion-section')
    const accordItems = Array.from(document.querySelectorAll<HTMLElement>('.accordion-title'))
    if (!accordSection) return
    accordSection.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement | null
        if(!target || !target.classList) return
        const accordTitle: HTMLElement | null= target.classList.contains('accordion-title')?target:null;
        if (!accordTitle) return
        const accordContent = accordTitle.nextElementSibling
        if (accordContent) {
            accordContent.classList.toggle('opened')
            const accordInner = accordContent.querySelector('.accordion-inner')
            if (accordInner)
                accordInner.classList.toggle('opened')
        }
    })
    window.addEventListener("keydown", (event: KeyboardEvent) => {
        let activeElement = document.activeElement as HTMLElement | null
        event.preventDefault()
        if(!activeElement) return
        const activeIndex: number = accordItems.indexOf(activeElement)
        let targetIndex = activeIndex
        if (event.key === 'Enter' || event.key === "space") {
            activeElement = document.activeElement  as HTMLElement | null
            if (activeElement && activeElement.closest('.accordion')) {
                const content = activeElement.nextElementSibling
                if (content){
                    content.classList.toggle('opened')
                    const accordInner = content.querySelector('.accordion-inner')
                    if(accordInner)
                    accordInner.classList.toggle('opened')
                }
            }
            return
        }
        if (activeElement && activeElement.closest('.accordion')) {
            if (event.key == "ArrowUp") {
                targetIndex = activeIndex == 0 ? accordItems.length -1 : activeIndex-1

            } else if (event.key == "ArrowDown") {
                targetIndex = activeIndex == accordItems.length -1 ? 0 : activeIndex+1
            }
            const itemtoFocus = accordItems[targetIndex]
            if(itemtoFocus)itemtoFocus.focus()

        } else {
            if (event.key == "ArrowUp") {
                targetIndex = accordItems.length -1
                
            } else if (event.key == "ArrowDown") {
                targetIndex = 0
            }
        
            const itemtoFocus = accordItems[targetIndex]
            if(itemtoFocus)itemtoFocus.focus()
        }

    })
 }