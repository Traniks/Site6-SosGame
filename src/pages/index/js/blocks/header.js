export function header() {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");

    const nav = document.querySelector(".header__nav");
    const hamburger = document.querySelector(".header__hamburger");
    
    const links = document.querySelectorAll(".header__list-link");

    hamburger.addEventListener("click", () => {
        toggleHamburger()
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            removeHamburger();
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            removeHamburger();
        });
    });

    function toggleHamburger() {
        header.classList.toggle("header_active");
        nav.classList.toggle("header__nav_active");
        hamburger.classList.toggle("header__hamburger_active");

        if (document.querySelector(".header_active") !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "visible";
        }

    }

    function removeHamburger() {
        header.classList.remove("header_active");
        nav.classList.remove("header__nav_active");
        hamburger.classList.remove("header__hamburger_active");
        body.style.overflow = "visible";
    }

}