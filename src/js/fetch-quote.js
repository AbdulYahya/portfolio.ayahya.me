import {$, URL_API_QUOTEONDESIGN} from "./constants.js";

// eslint-disable-next-line
const delay = (ms) => new Promise((response) => setTimeout(response, ms));
const processQuote = async() =>
  await (await delay(2000), await fetch(URL_API_QUOTEONDESIGN)).json();

processQuote()
  .then(
    (data) => {
      const quote = data.shift();

      $(".quote_wrapper").style.marginLeft = 0;
      $(".quote_wrapper").style.width = "60vw";
      $(".quote_wrapper").innerHTML = `<p id="intro__desc">${quote.content.replace(/\<p>|<\/p>/g, "")}</p>` +
                                      `<p id="intro_author">- ${quote.title}</p>`;

      console.log(quote);
      if (typeof quote.link !== "undefined") console.log("Link", quote.link);
      else console.log("No Source Link!");
    })
  .catch((reason) => console.log(reason.message));
