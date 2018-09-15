// constants.js
export const D = document;
export const $ = D.querySelector.bind(D);
export const $$ = (selector, startNode = D) => [ ...startNode.querySelectorAll(selector) ];
export const URL_API_QUOTEONDESIGN = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
