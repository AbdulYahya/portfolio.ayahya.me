const D = document;
const $ = D.querySelector.bind(D);
// const $$ = (selector, startNode = D) => [
//   ...startNode.querySelectorAll(selector)
// ];


$(".hamburger").addEventListener("click", () => {
  $(".hamburger").classList.toggle("is-active");
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
// eslint-disable-next-line
const timeout = (ms) => new Promise((res) => setTimeout(res, ms));

const fetchQuote = async() =>
  await (await timeout(2000), await fetch(url)).json();

fetchQuote()
  .then(
    (data) => {
      const quoteContent = data[0].content.replace(/\<p>|<\/p>/g, "");

      $(".quote_wrapper").style.marginLeft = 0;
      $(".quote_wrapper").style.width = "60vw";
      $(".quote_wrapper").innerHTML = `<p id="intro__desc">${quoteContent}</p>` +
                                      `<p id="intro_author">- ${data[0].title}</p>`;
    })
  .catch((reason) => console.log(reason.message));

