import {$} from "./constants.js";

$(".hamburger").addEventListener("click", () => {
  $(".hamburger").classList.toggle("is-active");
  if ($("nav").className === "responsive") {
    $("nav").className = "";
    $("main").style.paddingTop = "4em";
  }
  else {
    $("nav").className += "responsive";
    $("main").style.paddingTop = "0.5em";
  }
});
