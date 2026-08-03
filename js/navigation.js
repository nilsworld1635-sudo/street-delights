/* ==========================================
   NAVIGATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const menu = document.querySelector(".nav-menu");
    const toggle = document.querySelector(".menu-toggle");
    const links = document.querySelectorAll(".nav-menu a");

    /* ==========================
       Sticky Header
    ========================== */

    function stickyHeader() {

        if (window.scrollY > 60) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }

    }

    stickyHeader();

    window.addEventListener("scroll", stickyHeader);

    /* ==========================
       Mobile Menu
    ========================== */

    if (toggle && menu) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("active");
            toggle.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });

    }

    /* ==========================
       Close Menu
    ========================== */

    links.forEach(link => {

        link.addEventListener("click", () => {

            menu?.classList.remove("active");
            toggle?.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });

    /* ==========================
       Active Link on Scroll
    ========================== */

    const sections = document.querySelectorAll("section[id]");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activeMenu();

    window.addEventListener("scroll", activeMenu);

});