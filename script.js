document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");
    const locationSelect = document.querySelector(".location select");
    const locationSpan = document.querySelector(".location span");
    const addRestaurantLink = document.querySelector(".nav-right a:nth-child(2)");

    // Update location text when selecting a new city
    locationSelect.addEventListener("change", function () {
        locationSpan.textContent = `📍 ${locationSelect.options[locationSelect.selectedIndex].text}`;
    });

    // Handle search button click
    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        const location = locationSelect.value;

        if (query) {
            console.log(`Searching for "${query}" in ${location}...`);
            // You can integrate an API call or redirect to a search results page here
        } else {
            alert("Please enter a search term!");
        }
    });

    // Enable 'Enter' key search
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });

    // Handle 'Add Restaurant' click event
    addRestaurantLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "addR.html"; // Redirect to Add Restaurant page
    });
});
// feature-card
document.addEventListener("DOMContentLoaded", function () {
    // Select all feature cards
    const featureCards = document.querySelectorAll(".feature-card");

    // Define the target URLs
    const urls = {
        "pexels-nadim-shaikh-2923533-7758253.jpg": "order.html",
        "pexels-chanwalrus-941861.jpg": "dining.html",
        "pexels-caleboquendo-11140383.jpg": "live-events.html"
    };

    // Attach click event to each card
    featureCards.forEach(card => {
        card.addEventListener("click", function () {
            // Get the background image URL
            let bgImage = this.style.backgroundImage;
            let fileName = bgImage.match(/pexels-[^)]*/)[0]; // Extract image filename
            let targetURL = urls[fileName];

            // Redirect if URL exists
            if (targetURL) {
                window.location.href = targetURL;
            }
        });
    });
});
