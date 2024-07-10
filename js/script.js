//Carousal JS
const buttons = document.querySelectorAll("[data-carousel-button]");

let currentSlideIndex = 0; 
const intervalTime = 4000;

// Function to switch to the next slide
function goToNextSlide() {
    const slides = document.querySelector("[data-slides]");
    const totalSlides = slides.children.length;

    // Calculate the index of the next slide
    const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;

    // Update the active slide
    slides.children[currentSlideIndex].removeAttribute("data-active");
    slides.children[nextSlideIndex].setAttribute("data-active", "true");

    // Update the current slide index
    currentSlideIndex = nextSlideIndex;
}

// Use setInterval to automatically switch slides at the specified interval
const slideInterval = setInterval(goToNextSlide, intervalTime);

// Stop the slide show when the user clicks on the carousel buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(slideInterval);
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        slides.children[newIndex].setAttribute("data-active", "true");
        delete activeSlide.dataset.active;
        currentSlideIndex = newIndex;
        // Restart the slide show
        slideInterval = setInterval(goToNextSlide, intervalTime);
    });
});
// JS CODE FOR CONTACT FORM SUBMISSION
//NAVBAR JS
const toggleBtn = document.querySelector('.toggle-btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function (event) {
    dropDownMenu.classList.toggle('open');
    event.stopPropagation();
});


// Close the dropdown when clicking outside of it
document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar')) {
        dropDownMenu.classList.remove('open');
    }
});

// Prevent dropdown from closing when clicking inside it
dropDownMenu.addEventListener('click', function (event) {
    event.stopPropagation();
});





