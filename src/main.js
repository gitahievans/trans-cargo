const icon = document.querySelector("#menu-bar");
const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close-icon");
const value = document.querySelector("#value");
const input = document.querySelector("#input");
const chat = document.querySelector("#chat");
const whatsapp = document.querySelector("#whatsapp");

icon.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("flex");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("flex");
  menu.classList.add("hidden");
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
