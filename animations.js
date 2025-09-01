/// animations.js

gsap.registerPlugin(ScrollTrigger);

// --- PAGE LOAD (ONLY HERO TEXT NOW) ---
gsap.from(".hero-text", {
  duration: 1.3,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});

// --- PROJECT SECTIONS ---
gsap.utils.toArray(".project-container").forEach((section) => {
  let text = section.querySelector(".project-text");
  let image = section.querySelector(".project-image");

  gsap.from(text, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(image, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });
});

// --- ABOUT SECTION (appear together from TOP) ---
gsap.from(".about-container", {
  y: -90,      // start slightly above
  opacity: 0,  // start invisible
  duration: 1.3, // animation duration
  ease: "power3.out",
});


// --- CONTACT SECTION (appear from bottom) ---
gsap.from(".contact-container", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
    toggleActions: "play none none reset",
  },
  y: 60, // 👈 move upward from bottom
  opacity: 0, // fade in
  duration: 1.2,
  ease: "power3.out",
});
// --- TOOLS SECTION (rise when scrolling down, go down when scrolling up) ---
gsap.from(".tools h2", {
  scrollTrigger: {
    trigger: ".tools",
    start: "top 90%",
    end: "top 40%",
    scrub: true, // 👈 ties motion to scroll (forward & backward)
  },
  y: 80, // 👈 moves up on scroll down, back down on scroll up
  opacity: 0,
  ease: "power3.out",
});

gsap.from(".tool", {
  scrollTrigger: {
    trigger: ".tools",
    start: "top 90%",
    end: "top 40%",
    scrub: true, // 👈 same scroll-linked behavior
  },
  y: 150, // 👈 more distance
  opacity: 0,
  ease: "power3.out",
});
// PAGE LOAD SEQUENCE
gsap.timeline()
  .from(".project-page-hero h1", { y: 80, opacity: 0, duration: 0.8, ease: "power3.out" })
  .from(".project-page-hero p", { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
  .from(".video-wrapper", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
  .from(".project-page-content h2, .project-page-content p", { y: 40, opacity: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }, "-=0.4");




// --- BEFORE & AFTER IMAGES ANIMATION ---
gsap.utils.toArray(".before-after-images").forEach((container) => {
  const beforeImage = container.querySelector(".before-image");
  const afterImage = container.querySelector(".after-image");

  gsap.from(beforeImage, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%", // start when top of container hits 80% of viewport
      toggleActions: "play none none none",
    },
    x: -100, // slide from left
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(afterImage, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: 100, // slide from right
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2, // slight delay for stagger effect
  });
});








// --- ENSURE SCROLLTRIGGER UPDATES ---
ScrollTrigger.addEventListener("refresh", () => lenis?.resize?.());
ScrollTrigger.refresh();

