export function mobileNav(): void {
    const navBtn = document.body.querySelector('.nav-toggler');
    const mobileNav = document.body.querySelector('.mobile-nav')
    if (!navBtn || !mobileNav) return
    navBtn.addEventListener("click", () => {
        if (mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open')
            document.body.style.overflow = "auto"
        } else {
            mobileNav.classList.add('open')
            document.body.style.overflow = "hidden"
        }
    });
    window.addEventListener("keydown", (event): void => {
        if (event.key == "Escape") {
            if (mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open')
            document.body.style.overflow = "auto"
        }
        }
    })
}