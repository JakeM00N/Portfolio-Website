// Select all nav links
// Show loader for 4 seconds
const loader = document.getElementById("loader");
const dots = document.querySelectorAll(".dots span");

// Listen for animationend on the last dot
dots[dots.length - 1].addEventListener("animationend", () => {
  loader.style.opacity = 0; // fade out
  loader.style.transition = "opacity 0.5s ease-out";
  setTimeout(() => loader.style.display = "none", 500);
});

const gmailPill = document.getElementById("gmail-pill");
const email = gmailPill.textContent;

gmailPill.addEventListener("click", () => {
  navigator.clipboard.writeText(email).then(() => {
    // Show temporary feedback
    gmailPill.textContent = "Copied!";
    setTimeout(() => {
      gmailPill.textContent = email; // revert back
    }, 1500);
  }).catch((err) => {
    console.error("Failed to copy: ", err);
  });
});

const navLinks = document.querySelectorAll('nav ul li a');

// Select all sections
const sections = document.querySelectorAll('main section');

// Function to highlight nav link based on scroll position
function highlightNav() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust offset for navbar height
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Run on scroll
window.addEventListener('scroll', highlightNav);

// Optional: Highlight Projects link immediately if page loads at top
highlightNav();
