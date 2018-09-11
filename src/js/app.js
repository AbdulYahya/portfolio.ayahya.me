// JS Goes here - ES6 supported

const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [
  ...startNode.querySelectorAll(selector)
];

const menuToggle = $(".hamburger");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-active");
  if ($("nav").className === "responsive") {
    $("nav").className = "";
    $("main").style.padding = "4em 0 0 0";
  }
  else {
    $("nav").className += "responsive";
    $("main").style.padding = "0.5em 0 0 0";
  }
});

