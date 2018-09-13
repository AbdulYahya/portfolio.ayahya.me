// JS Goes here - ES6 supported

const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [
  ...startNode.querySelectorAll(selector)
];

const menuToggle = $(".hamburger");
const quoteWrapper = $(".quote_wrapper");

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

const url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

const fetchQuote = (async) () =>
  await (await fetch(url)).json();

fetchQuote()
  .then(
    (data) => {
      const quoteContent = data[0].content.replace(/\<p>|<\/p>/g, "");
      console.log(quoteContent);
      console.log(data[0].title);

      quoteWrapper.innerHTML = `<p id="intro__desc">${quoteContent}</p>` +
                               `<p id="intro_author">- ${data[0].title}</p>`;
    })
  .catch((reason) => console.log(reason.message));

