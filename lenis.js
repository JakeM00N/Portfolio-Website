// lenis.js

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.8, // higher = smoother, lower = snappier
  easing: (t) => 1 - Math.pow(1 - t, 3), // smooth cubic ease-out
  smooth: true, // enable smooth scrolling
  smoothTouch: true, // enable smooth scrolling on touch devices
  direction: 'vertical', // default: vertical scrolling
  gestureDirection: 'vertical', // detect vertical gestures
  mouseMultiplier: 1, // scroll speed with mouse wheel
  touchMultiplier: 2, // scroll speed with touch
  infinite: false, // disable infinite scrolling
})

// Keep ScrollTrigger in sync with Lenis
lenis.on("scroll", () => {
  ScrollTrigger.update()
})

// RequestAnimationFrame loop
function raf(time) {
  lenis.raf(time)
  ScrollTrigger.update() // keep GSAP in sync
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
