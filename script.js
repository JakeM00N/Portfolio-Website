const loader = document.getElementById("loader");
const dots = document.querySelectorAll(".dots span");

if (loader && dots.length > 0) {
  const lastDot = dots[dots.length - 1];
  lastDot.addEventListener("animationend", () => {
    loader.style.opacity = 0;
    loader.style.transition = "opacity 0.5s ease-out";
    setTimeout(() => (loader.style.display = "none"), 500);
  });
}

// NAV HIGHLIGHT
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");

if (navLinks.length > 0 && sections.length > 0) {
  function highlightNav() {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav);
  highlightNav();
}
