const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburger = document.querySelector(".hamburger");

// btn.addEventListener("click", function (e) {
//   console.log("working");
//   menu.classList.toggle("hide");
//   hamburger.classList.toggle("open");
// });
// console.log(btn);

btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
