gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// --- HERO TEXT ---
const heroText = document.querySelector(".hero-text");
if (heroText) {
  gsap.from(heroText, {
    duration: 2,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1 // waits 2 seconds before starting
  });
}

// Parallax effect
gsap.to(".hero-bg1", {
  y: 100, // moves background down as you scroll
  ease: "none",
  scrollTrigger: {
    trigger: ".project-page-hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
gsap.to(".hero-bg2", {
  y: 100, // moves background down as you scroll
  ease: "none",
  scrollTrigger: {
    trigger: ".project-page-hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
// --- PROJECT SECTIONS ---
gsap.utils.toArray(".project-container").forEach((section) => {
  if (!section) return;

  const text = section.querySelector(".project-text");
  const image = section.querySelector(".project-image");

  if (text) {
    gsap.fromTo(
      text,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        ease: "power3.out",
      }
    );
  }

  if (image) {
    gsap.fromTo(
      image,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        ease: "power3.out",
      }
    );
  }
});

// For simple animations not dependent on scroll
document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector(".about-container");
  if (about) {
    gsap.from(about, {
      y: 90,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector(".tools-container");
  if (about) {
    gsap.from(about, {
      y: 90,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }
});



// --- CONTACT SECTION ---
const contact = document.querySelector(".contact-container");
if (contact) {
  gsap.fromTo(
    contact,
    { y: 90, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: contact,
        start: "top 85%",
        end: "top 30%",
        scrub: true,
      },
      ease: "power3.out",
    }
  );
}

window.addEventListener("load", () => {
  // --- PROJECT PAGE HERO ---
  const heroElements = [
    ...gsap.utils.toArray(
      ".project-page-hero h1, .project-page-hero p, .video-wrapper, .project-page-content h2, .project-page-content p"
    ),
  ];

  heroElements.forEach((el) => {
    if (el) {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 60%",
            scrub: true, // reversible animation
          },
        }
      );
    }
  });

  // --- BEFORE & AFTER IMAGES ---
  gsap.utils.toArray(".before-after-images").forEach((container) => {
    const beforeImage = container.querySelector(".before-image");
    const afterImage = container.querySelector(".after-image");

    [beforeImage, afterImage].forEach((img) => {
      if (img) {
        gsap.fromTo(
          img,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      }
    });
  });
});

// --- SCROLLTRIGGER REFRESH ---
setTimeout(() => {
  if (typeof lenis !== "undefined") {
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
  }
  ScrollTrigger.refresh();
}, 100);
