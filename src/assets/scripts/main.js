import { HomePage } from '../tipe/home.tipe';

console.log('Your HomePage items:', HomePage.logoGroup.logoText);

const logo = document.querySelector('.logo');

if (HomePage.logoGroup.logoImage === null) {
  logo.innerHTML = HomePage.logoGroup.logoText;
} else {
  logo.innerHTML = `<img src="${HomePage.logoGroup.logoImage.url}">`;
}

// const nav = document.getElementsByTagName('nav')[0];
// // title.innerHTML = TestDoc.title;
// nav.innerHTML += `
//   <li class="nav__item"><a href="${Navigation.test}">${Navigation.test}</a></li>`;

// nav[2].innerHTML(`
//   <li class="nav__item"><a href="${Navigation.home}">Navigation.home</a></li>`);

// title.innerHTML += TestDoc.title;
