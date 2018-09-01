import { HomePage } from '../tipe/home.tipe';

// Header
const nav = document.getElementsByTagName('nav')[0];
const logo = document.querySelector('.logo');

// Intro Section
const introHeading = document.querySelector('#intro__heading');
const introDesc = document.querySelector('#intro__desc');

HomePage.pageTitle = document.getElementsByTagName('title')[0];

// prettier-ignore
for (let navItem in HomePage.navItems) {
  if (navItem !== 'home') {
    nav.innerHTML += `<li class="nav__item"><a href="${ HomePage.navItems[navItem] }">${navItem}</a></li>`;
  } else {
    if (HomePage.logoGroup.logoImage === null) {
      logo.innerHTML = `<a id="logo__text" href="${HomePage.navItems[navItem]}">${HomePage.logoGroup.logoText}</a>`;
    } else {
      logo.innerHTML = `<a href="${HomePage.navItems[navItem]}"><img src="${HomePage.logoGroup.logoImage.url}"></a>`;
    }
  }
}

introHeading.innerHTML = HomePage.sectionBlocks.introSection.heading;
introDesc.innerHTML = HomePage.sectionBlocks.introSection.description;

let menuToggle = document.querySelector('.hamburger');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');

  if (nav.className === 'responsive') nav.className = null;
  else nav.className += 'responsive';
});
