document.addEventListener("DOMContentLoaded", () => {

    /* =========================
    HAMBURGER MENU
    ========================= */

    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const navLinks = document.querySelectorAll(".nav1");

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        mobileNav.classList.toggle("active");

    });

    /* Menü schließen bei Klick */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            mobileNav.classList.remove("active");

        });

    });
    
    /* =========================
   COUNTER ANIMATION
========================= */

    const counter = document.getElementById("counter");
    const highlightSection = document.querySelector(".about-highlight");

if (counter && highlightSection) {

    let counterStarted = false;

    function animateCounter(target, duration = 1500) {

        let start = 0;
        const step = target / (duration / 16);

        function update() {

            start += step;

            if (start < target) {
                counter.textContent = Math.floor(start);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        }

        update();
    }

    /* Trigger nur wenn sichtbar */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !counterStarted) {

                counterStarted = true;
                animateCounter(70);
            }
        });

    }, {
        threshold: 0.5
    });

    observer.observe(highlightSection);
    }

/*========================= 
        FRAUEN SLIDER 
=========================*/ 
    
    const slider = document.querySelector(".frauen-slider"); 
    const slides = document.querySelectorAll(".frau"); 
    const next = document.querySelector(".slider-btn.right"); 
    const prev = document.querySelector(".slider-btn.left"); 

if (slider && slides.length && next && prev) {
    
    let index = 0; 
    const total = slides.length; 
    function updateSlider() {
    if (!slider) return;
    slider.style.transform = `translateX(-${index * 100}%)`;
}
    
    // NEXT 
    
    function nextSlide() { 
        index = (index + 1) % total; 
        updateSlider(); 
    } 
    
    // PREV 
    
    function prevSlide() { 
        index = (index - 1 + total) % total; 
        updateSlider(); 
    } 
    
    next.addEventListener("click", () => { 
        nextSlide(); 
        resetAuto(); 
    }); 
    
    prev.addEventListener("click", () => { 
        prevSlide(); 
        resetAuto(); 
    }); 
    
    // AUTO SLIDE 
    
    let interval = setInterval(nextSlide, 5000); 
    
    // PAUSE ON HOVER 
    
    slider.addEventListener("mouseenter", () => { 
        clearInterval(interval); 
    }); 
    
    slider.addEventListener("mouseleave", () => { 
        interval = setInterval(nextSlide, 3000); 
    }); 
    
    // reset helper 
    
    function resetAuto() { 
        clearInterval(interval); 
        interval = setInterval(nextSlide, 3000);
    } 
}
/* =========================
   AG MOBILITÄT SLIDER
========================= */

const themenSlider = document.querySelector(".themen-slider");
const themenSlides = document.querySelectorAll(".thema");
const themenPrev = document.getElementById("themenPrev");
const themenNext = document.getElementById("themenNext");

if (
    themenSlider &&
    themenSlides.length > 0 &&
    themenPrev &&
    themenNext
) {

    let themenIndex = 0;
    const themenTotal = themenSlides.length;

    function updateThemenSlider() {

        themenSlider.style.transform =
            `translateX(-${themenIndex * 100}%)`;

    }

    function nextThema() {

        themenIndex++;

        if (themenIndex >= themenTotal) {
            themenIndex = 0;
        }

        updateThemenSlider();
    }

    function prevThema() {

        themenIndex--;

        if (themenIndex < 0) {
            themenIndex = themenTotal - 1;
        }

        updateThemenSlider();
    }

    let themenInterval = setInterval(nextThema, 5000);

    function resetThemenAuto() {
    clearInterval(themenInterval);
    themenInterval = setInterval(nextThema, 5000);
}
    
    themenNext.addEventListener("click", () => {
    nextThema();
    resetThemenAuto();
});

themenPrev.addEventListener("click", () => {
    prevThema();
    resetThemenAuto();
});

themenSlider.addEventListener("mouseenter", () => {
    clearInterval(themenInterval);
});

themenSlider.addEventListener("mouseleave", () => {
    themenInterval = setInterval(nextThema, 5000);
});

/* =========================
   TOUCH SWIPE
========================= */

let touchStartX = 0;
let touchEndX = 0;

themenSlider.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

}, { passive: true });


themenSlider.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 50) {
        resetThemenAuto();
        return;
    }

    if (distance < 0) {
        nextThema();
    } else {
        prevThema();
    }

    resetThemenAuto();

}, { passive: true });

} 

};
