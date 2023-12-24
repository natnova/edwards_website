// JavaScript for button functionality
document.getElementById("home-button").addEventListener("click", function () {
    showSection("home");
});

document.getElementById("about-button").addEventListener("click", function () {
    showSection("about");
});

document.getElementById("portfolio-button").addEventListener("click", function () {
    showSection("portfolio");
});

document.getElementById("contact-button").addEventListener("click", function () {
    showSection("contact");
});

function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

// JavaScript for smooth scrolling (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});