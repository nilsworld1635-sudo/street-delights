/* ==========================================
   PREMIUM LOADER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    // Minimum loading time
    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

        }, 700);

    }, 1200);

});

/* ==========================================
   PRELOAD IMAGES
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});