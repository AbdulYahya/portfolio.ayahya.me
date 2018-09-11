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
    $("main").style.padding = "5em 0.5em 1.5em 1.5em";
  }
  else {
    $("nav").className += "responsive";
    $("main").style.padding = "0.75em 0.5em 1.5em 1.5em";
  }
});

