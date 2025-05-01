gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Create the smooth scroller
const smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 1,
  normalizeScroll: true,
  ignoreMobileResize: true,
  effects: true,
  preventDefault: true
});

// Reveal the hero heading
gsap.set(".heading", {
  yPercent: -150,
  opacity: 1
});

// Animate split text stagger
let tl = gsap.timeline();
let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
let chars = mySplitText.chars;

chars.forEach((char, i) => {
  smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
});

// Smooth scroll to section from navbar
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      smoother.scrollTo(targetEl, true, "top top");
    }
  });
});
