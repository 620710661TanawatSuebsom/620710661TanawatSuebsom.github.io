// script.js

// Smooth scrolling function for future link sections (if any)
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});

// Functionality for any future interactive elements
console.log("JavaScript loaded successfully.");
