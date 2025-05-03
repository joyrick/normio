// Cursor Ball Logic
const ball = document.querySelector(".ball");

document.addEventListener("mousemove", (event) => {
  const X = event.clientX;
  const Y = event.clientY + window.scrollY;
  ball.style.transform = `translate(${X}px , ${Y}px)`;
});

// GSAP Animations on Load
function animation() {
  let ani = gsap.timeline();

  ani.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut"
  });

  ani.to(".displaceElem", {
    y: 0,
    duration: 1.5,
    ease: "expo.inOut",
    stagger: 0.2,
    delay: -1
  });

  ani.from(".footer", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
    delay: -1
  });

  ani.to(".d2", {
    y: 0,
    duration: 2,
    ease: "expo.inOut",
    delay: 0.5,
    opacity: 0.5
  });
}
animation();

// Hover Image Reveal Logic
let difrr = 0;
let rotate = 0;

document.querySelectorAll(".elem").forEach((ele) => {
  ele.addEventListener("mouseleave", (e) => {
    const diff = e.clientY - ele.getBoundingClientRect().top;
    gsap.to(ele.querySelector("img"), {
      opacity: 0,
      top: diff,
      left: e.clientX,
      ease: "power3"
    });
  });

  ele.addEventListener("mousemove", (e) => {
    difrr = e.clientX - rotate;
    rotate = e.clientX;
    const diff = e.clientY - ele.getBoundingClientRect().top;
    gsap.to(ele.querySelector("img"), {
      opacity: 1,
      top: diff,
      left: e.clientX,
      duration: 0.5,
      rotate: gsap.utils.clamp(-20, 20, difrr),
      ease: "power3"
    });
  });
});

// ScrollSmoother Initialization
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effects: true,
  normalizeScroll: true
});


/* animacia obrazkov */
function animation() {
  let ani = gsap.timeline();

  ani.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut"
  });

  ani.to(".displaceElem", {
    y: 0,
    duration: 1.5,
    ease: "expo.inOut",
    stagger: 0.2,
    delay: -1
  });

  ani.from(".heading-img", {
    opacity: 0,
    scale: 0.8,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  }, "-=1"); // starts earlier, overlapping with previous animation
  

  ani.from(".footer", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
    delay: -1
  });

  ani.to(".d2", {
    y: 0,
    duration: 2,
    ease: "expo.inOut",
    delay: 0.5,
    opacity: 0.5
  });
}

/* male animacie */

gsap.to("#bounceArrow", {
  y: -1,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

gsap.to("#bounceArrowLeft", {
  y: -10,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

/* fullscreen pre zobrazenie detailu */

function showImageFullscreen() {
  const overlay = document.getElementById("fullscreenOverlay");
  overlay.style.display = "flex";
}

function hideImageFullscreen() {
  const overlay = document.getElementById("fullscreenOverlay");
  overlay.style.display = "none";
}
