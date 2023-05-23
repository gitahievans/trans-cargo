import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icon = document.querySelector("#menu-bar");
const menu = document.querySelector("#menu");
const value = document.querySelector("#value");
const input = document.querySelector("#input");
const chat = document.querySelector("#chat");
const whatsapp = document.querySelector("#whatsapp");

icon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  //   menu.classList.add("flex");
});

input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
value.textContent = input.value;

chat.addEventListener("mouseover", () => {
  whatsapp.classList.remove("hidden");
  whatsapp.classList.add("block");
});

chat.addEventListener("mouseout", () => {
  whatsapp.classList.add("hidden");
  whatsapp.classList.remove("block");
});

// ANIMATIONS
gsap.from(".logo", { duration: 4, x: -1000, ease: "bounce" });

// gsap.from(".home-text, .logo-text", {
//   duration: 1,
//   opacity: 0,
//   scale: 0,
//   stagger: 0.25,
//   ease: "back",
//   scrollTrigger: {
//     trigger: ".home-text",
//     toggleActions: "restart none restart none ",
//   },
// });

// gsap.from(".why-h1", {
//   duration: 1.5,
//   opacity: 0,
//   x: -1000,
//   ease: "slow",
//   scrollTrigger: {
//     trigger: ".why-h1",
//     toggleActions: "restart none restart none ",
//   },
// });
// gsap.from(".why-text", {
//   duration: 1,
//   visibility: 0,
//   x: 1000,
//   ease: "slow",
//   scrollTrigger: {
//     trigger: ".why-text",
//     toggleActions: "restart none restart none ",
//   },
// });

function animateElements(elements) {
  elements.forEach((element) => {
    const { selector, options, trigger, toggleActions } = element;
    gsap.from(selector, {
      ...options,
      scrollTrigger: {
        trigger: trigger || selector,
        toggleActions: toggleActions || "restart none none none",
      },
    });
  });
}

const elements = [
  {
    selector: ".home-image",
    options: { duration: 2, y: 1000, delay: 0.5, ease: "slow" },
    trigger: ".home-text",
    toggleActions: "play none restart none",
  },
  {
    selector: ".home-text, .logo-text",
    options: { duration: 1, opacity: 0, scale: 0, stagger: 0.25, ease: "back" },
    trigger: ".home-text",
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".why-h1",
    options: { duration: 1.5, opacity: 0, x: -1000, ease: "slow" },
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".why-text",
    options: { duration: 1, visibility: 0, x: 1000, ease: "slow" },
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value1",
    options: { duration: 2, y: 200, opacity: 0 },
    trigger: ".value1",
  },
  {
    selector: ".value2",
    options: { duration: 2, y: 300, delay: 0.5, opacity: 0 },
    trigger: ".value2",
  },
  {
    selector: ".value3",
    options: { duration: 2, y: 300, delay: 0.75, opacity: 0 },
    trigger: ".value3",
  },
  {
    selector: ".value1-img",
    options: { duration: 2, visibility: 0, scale: 0 },
    trigger: ".value1-img",
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value1-h2",
    options: { visibility: 0, scale: 0, delay: 0.25 },
    trigger: ".value1-img",
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value1-text",
    options: { duration: 2, visibility: 0, scale: 0, delay: 0.65 },
    trigger: ".value1-h2",
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value2-h2",
    options: { duration: 2, visibility: 0, scale: 0, delay: 0.5 },
    trigger: ".value2-img",
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value2-img",
    options: { duration: 2, visibility: 0, scale: 0, delay: 0.25 },
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value2-text",
    options: { duration: 2, visibility: 0, scale: 0, delay: 0.65 },
    trigger: ".value2-h2",
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value3-img",
    options: { duration: 2, visibility: 0, scale: 0, delay: 1.2 },
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".value3-h2",
    options: { duration: 2, visibility: 0, scale: 0, delay: 0.5 },
    trigger: ".value3-img",
    toggleActions: "restart none restart none ",
  },

  {
    selector: ".value3-text",
    options: { duration: 2, visibility: 0, scale: 0, delay: 1 },
    trigger: ".value3-h2",
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".service-h1",
    options: { duration: 1.5, visibility: 0, scale: 0, x: -1000, ease: "slow" },
    toggleActions: "restart none restart none ",
  },
  {
    selector: ".quote-truck",
    options: { duration: 1.5, y: -500, opacity: 0, delay: 1, ease: "bounce" },
    trigger: ".quote-h1",
  },
  {
    selector: ".quote-truck-mb",
    options: { duration: 2, y: -500, opacity: 0, delay: 1, ease: "bounce" },
    trigger: ".truck-trigger",
  },
  {
    selector: ".contact-l",
    options: {
      duration: 1,
      x: -200,
      opacity: 0,
      stagger: 1,
      ease: "back",
      scale: -2,
    },
  },
  {
    selector: ".contact-r",
    options: {
      duration: 2,
      x: 200,
      opacity: 0,
      stagger: 1,
      scale: -2,
      ease: "back",
    },
  },
  {
    selector: ".contact-us, .quote-h1",
    options: { duration: 2, delay: 1, scale: 0, ease: "back" },
  },
  {
    selector: ".calc",
    options: { duration: 2, delay: 1, x: 200, ease: "back" },
  },
];
animateElements(elements);

// function animateElementsTo(elementsTo) {
//   elementsTo.forEach((element) => {
//     const {
//       selector,
//       options,
//       trigger,
//       toggleActions,
//       start,
//       end,
//       scrub,
//       pin,
//       startColor,
//       endColor,
//     } = element;
//     gsap.to(selector, {
//       ...options,
//       scrollTrigger: {
//         trigger: trigger || selector,
//         toggleActions: toggleActions || "restart none none none",
//         start: start,
//         end: end,
//         scrub: scrub,
//         pin: pin,
//       },
//       markers: {
//         startColor: startColor,
//         endColor: endColor,
//       },
//     });
//   });
// }

// const elementsTo = [
//   {
//     selector: ".old-truck",
//     options: { duration: 8, x: -1000 },
//     trigger: ".old-truck",
//     start: "top 90%",
//     end: "top 30%",
//     scrub: 4,
//     pin: true,
//     startColor: "red",
//     endColor: "blue",
//   },
// ];

// animateElementsTo(elementsTo);
// ANIMATIONS
