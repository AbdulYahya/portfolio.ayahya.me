// JS Goes here - ES6 supported

const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [
  ...startNode.querySelectorAll(selector)
];

let menuToggle = $('.hamburger');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  if ($('#nav').className === 'responsive') $('#nav').className = '';
  else $('#nav').className += 'responsive';
});
// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");
