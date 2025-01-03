console.log("Script Loaded");

// Toggle menu visibility for burger menu
const burgerIcon = document.querySelector(".third img");
if (burgerIcon) {
    burgerIcon.addEventListener("click", () => {
        const menuList = document.querySelector(".list");
        if (menuList) {
            menuList.style.display = menuList.style.display === "flex" ? "none" : "flex";
        }
    });
}

// Handle buttons in the top-right corner (Create Account, Login, Help)
// const topButtons = document.querySelectorAll(".btn button");
// if (topButtons) {
//     topButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             switch (index) {
//                 // case 0:
//                 //     alert("Create Account button clicked!");
//                 //     break;
//                 // case 1:
//                 //     alert("Login button clicked!");
//                 //     break;
//                 case 2:
//                     alert("Help button clicked!");
//                     break;
//                 default:
//                     break;
//             }
//         });
//     });
// }

// Handle Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".add button");
if (addToCartButtons) {
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.closest(".particular")?.querySelector("p")?.textContent;
            alert(`Added to Cart: ${productName}`);
        });
    });
}

// Handle carousel indicators
const carouselIndicators = document.querySelectorAll(".clicker .kicker");
if (carouselIndicators) {
    carouselIndicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            carouselIndicators.forEach((ind, i) => {
                ind.style.background = i === index ? "#fe9126" : "green";
            });
            alert(`Carousel Indicator ${index + 1} clicked!`);
        });
    });
}

// Handle Search button
const searchButton = document.querySelector(".search img");
if (searchButton) {
    searchButton.addEventListener("click", () => {
        const searchInput = document.querySelector(".search input")?.value;
        alert(`Search query: ${searchInput}`);
    });
}

// Handle navigation links
const navLinks = document.querySelectorAll(".list li a");
if (navLinks) {
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link action for demo
            alert(`Navigating to: ${link.textContent}`);
        });
    });
}

// Handle footer links
const footerLinks = document.querySelectorAll(".points .lines p");
if (footerLinks) {
    footerLinks.forEach((footerLink) => {
        footerLink.addEventListener("click", () => {
            alert(`Footer link clicked: ${footerLink.textContent}`);
        });
    });
}

console.log("Script Loaded");

// Button Navigation
const buttons = document.querySelectorAll(".btn button");

if (buttons.length) {
    buttons[0].addEventListener("click", () => {
        window.location.href = "create-account.html"; // Navigate to Create Account page
    });

    buttons[1].addEventListener("click", () => {
        window.location.href = "login.html"; // Navigate to Login page
    });

    buttons[2].addEventListener("click", () => {
        window.location.href = "about-us.html"; // Navigate to About Us page
    });
}

// Add to Cart functionality
document.querySelectorAll(".add button").forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.closest(".particular")?.querySelector("p")?.textContent;
        alert(`Added to Cart: ${productName}`);
    });
});

// Search functionality
document.querySelector(".search img").addEventListener("click", () => {
    const searchInput = document.querySelector(".search input").value;
    alert(`Search query: ${searchInput}`);
});

