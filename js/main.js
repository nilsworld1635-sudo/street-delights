/* ======================================================
   PK'S STREET D-LITE
   MAIN JS
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 PK'S Street D-Lite Website Loaded");

    /* ==========================
       Current Year
    ========================== */

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* ==========================
       Lazy Loading Images
    ========================== */

    const images = document.querySelectorAll("img[data-src]");

    if (images.length) {

        const imageObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const img = entry.target;

                img.src = img.dataset.src;

                img.onload = () => img.classList.add("loaded");

                observer.unobserve(img);

            });

        });

        images.forEach(img => imageObserver.observe(img));

    }

    /* ==========================
       Navbar Shadow
    ========================== */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) return;

        header.classList.toggle("scrolled", window.scrollY > 50);

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink);

    /* ==========================
       Button Ripple
    ========================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function(e) {

            const circle = document.createElement("span");

            const size = Math.max(this.clientWidth, this.clientHeight);

            circle.style.width = size + "px";
            circle.style.height = size + "px";

            const rect = this.getBoundingClientRect();

            circle.style.left = (e.clientX - rect.left - size / 2) + "px";
            circle.style.top = (e.clientY - rect.top - size / 2) + "px";

            circle.className = "ripple";

            this.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 600);

        });

    });

    /* ==========================
       Reveal Body
    ========================== */

    document.body.classList.add("loaded");

});