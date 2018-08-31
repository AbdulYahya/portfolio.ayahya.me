import { HomePage } from '../tipe/home.tipe';

const nav = document.getElementsByTagName('nav')[0];
const logo = document.querySelector('.logo');

HomePage.pageTitle = document.getElementsByTagName('title')[0];

// prettier-ignore
for (let navItem in HomePage.navItems) {
  if (navItem !== 'home') {
    nav.innerHTML += `<li class="nav__item"><a href="${ HomePage.navItems[navItem] }">${navItem}</a></li>`;
  } else {
    if (HomePage.logoGroup.logoImage === null) {
      logo.innerHTML = `<a href="${HomePage.navItems[navItem]}">${HomePage.logoGroup.logoText}</a>`;
    } else {
      logo.innerHTML = `<a href="${HomePage.navItems[navItem]}"><img src="${HomePage.logoGroup.logoImage.url}"></a>`;
    }
  }
}
