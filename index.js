// Function to handle click events on navigation links
function handleNavigationClick(event) {
    const targetUrl = event.target.getAttribute('href');
    if (targetUrl && !targetUrl.startsWith('#')) {
        event.preventDefault(); // Prevent default behavior for external links
        window.location.href = targetUrl; // Redirect to the target URL
    }
}

// Add click event listeners to the navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigationClick);
    });
});