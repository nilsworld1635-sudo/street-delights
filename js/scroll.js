/* ==========================================
   SMOOTH SCROLL & BACK TO TOP
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Smooth Anchor Scroll
    ========================== */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            const header = document.querySelector(".header");
            const offset = header ? header.offsetHeight : 80;

            const position =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        });

    });

    /* ==========================
       Back To Top Button
    ========================== */

    const topButton =
        document.querySelector(".float-btn.top") ||
        document.querySelector(".back-to-top");

    if (!topButton) return;

    topButton.style.opacity = "0";
    topButton.style.visibility = "hidden";
    topButton.style.pointerEvents = "none";

    function toggleTopButton() {

        if (window.scrollY > 400) {

            topButton.style.opacity = "1";
            topButton.style.visibility = "visible";
            topButton.style.pointerEvents = "auto";

        } else {

            topButton.style.opacity = "0";
            topButton.style.visibility = "hidden";
            topButton.style.pointerEvents = "none";

        }

    }

    toggleTopButton();

    window.addEventListener("scroll", toggleTopButton);

    topButton.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});