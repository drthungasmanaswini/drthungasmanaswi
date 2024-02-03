document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    // Listen for scroll events
    window.addEventListener("scroll", function () {
        // Check if the user has scrolled past a certain point (e.g., 50 pixels from the top)
        if (window.scrollY > 50) {
            navbar.classList.add("grey");
            navbar.classList.remove("transparent");
        } else {
            navbar.classList.add("transparent");
            navbar.classList.remove("grey");
        }
    });
});


