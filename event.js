document.addEventListener("DOMContentLoaded", function () {
    const eventContainer = document.querySelector(".event-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let scrollAmount = 0;
    const scrollStep = 300; // Adjust scroll step based on card width

    nextBtn.addEventListener("click", function () {
        eventContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        eventContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
});
