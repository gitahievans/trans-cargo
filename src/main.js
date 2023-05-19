import { gsap } from "gsap";

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
gsap.from(".logo", { duration: 5, x: -1000, ease: "bounce.out" });

gsap.from(".home-image", { duration: 2, y: 1000, delay: 1, ease: "slow" });


// ANIMATIONS
