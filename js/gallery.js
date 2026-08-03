/* ======================================================
   PREMIUM GALLERY LIGHTBOX
====================================================== */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = document.querySelector(".lightbox-caption");

const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;

function openLightbox(index){

    currentIndex = index;

    const item = galleryItems[index];

    lightboxImage.src = item.dataset.image;
    lightboxCaption.textContent = item.dataset.title;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

function showNext(){

    currentIndex++;

    if(currentIndex >= galleryItems.length){

        currentIndex = 0;

    }

    openLightbox(currentIndex);

}

function showPrev(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryItems.length - 1;

    }

    openLightbox(currentIndex);

}

/* Open */

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        openLightbox(index);

    });

});

/* Close */

closeBtn.addEventListener("click",closeLightbox);

/* Next */

nextBtn.addEventListener("click",showNext);

/* Previous */

prevBtn.addEventListener("click",showPrev);

/* Click outside image */

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

/* Keyboard */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        closeLightbox();

    }

    if(e.key==="ArrowRight"){

        showNext();

    }

    if(e.key==="ArrowLeft"){

        showPrev();

    }

});