/* ==========================================
   SCROLL ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
        ".fade-up, .fade-down, .fade-left, .fade-right, .zoom-in"
    );

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        }

    );

    animatedElements.forEach((element) => {

        observer.observe(element);

    });

});

/* ==========================================
   PARALLAX HERO
========================================== */

window.addEventListener("scroll", () => {

    const heroImage = document.querySelector(".hero-image");

    if (!heroImage) return;

    const offset = window.scrollY * 0.12;

    heroImage.style.transform = `translateY(${offset}px)`;

});

/* ==========================================
   STAGGER CARDS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".why-card, .signature-card, .menu-card, .gallery-item, .review-card"
    );

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.08}s`;

    });

});