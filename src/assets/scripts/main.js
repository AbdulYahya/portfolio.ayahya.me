import { HomePage } from '../tipe/home.tipe';

// Shortcut Vars
const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [
  ...startNode.querySelectorAll(selector)
];

// Intro Section
$('title').innerHTML = HomePage.pageTitle;

// prettier-ignore
for (let navItem in HomePage.navItems) {
  if (navItem !== 'home') {
    $('nav').innerHTML += `<li class="nav__item"><a href="${ HomePage.navItems[navItem] }" disabled>${navItem}</a></li>`;
  } else {
    if (HomePage.logoGroup.logoImage === null) {
      $('.logo').innerHTML = `<a id="logo__text" href="${HomePage.navItems[navItem]}">${HomePage.logoGroup.logoText}</a>`;
    } else {
      $('.logo').innerHTML = `<a href="${HomePage.navItems[navItem]}"><img id="logo__img" src="${HomePage.logoGroup.logoImage.url}"></a>`;
    }
  }
}

$('#intro__heading').innerHTML = HomePage.sectionBlocks.introSection.heading;
$('#intro__desc').innerHTML = HomePage.sectionBlocks.introSection.description;

let menuToggle = document.querySelector('.hamburger');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  if ($('nav').className === 'responsive') $('nav').className = '';
  else $('nav').className += 'responsive';
});

$('#footer__cpy').innerHTML = HomePage.footerCopy.copyright;
