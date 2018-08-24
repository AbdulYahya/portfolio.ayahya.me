import { TestDoc } from './test.tipe';
import { Navigation } from '../tipe/nav.tipe';

console.log('Your Doc data:', TestDoc);
console.log('Your Nav items:', Navigation);

const title = document.querySelector('.title');
const nav = document.getElementsByTagName('nav')[0];
// title.innerHTML = TestDoc.title;
nav.append(Navigation.home);
nav.append(Navigation.home);
nav.append(Navigation.home);
