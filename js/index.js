document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

function autoChangeSlides() {
    currentSlide = (currentSlide + 1) % btns.length;
    sliderNav(currentSlide);
}

const intervalId = setInterval(autoChangeSlides, 7000);

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clearInterval(intervalId);
    });
});
});

$(window).on("load", function(){
    setTimeout(function() {
        $(".loader-wrapper").fadeOut("slow");
    }, 1200);
});

