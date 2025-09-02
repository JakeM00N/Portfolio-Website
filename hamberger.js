document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) { // ✅ Check they exist
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});
