import './styles.css';
import {buildHome} from './build.js';
import {buildMenu} from './menu.js';
import {buildContact} from './contact.js';

const heroWrapper = document.querySelector('.hero');
const wrapper = document.querySelector('#content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');

(function(){
    const hero = document.createElement('div');
    hero.classList.add('page-hero');
    hero.innerHTML = `<h1>Odin's Seafood</h1>`;
    heroWrapper.appendChild(hero);
})();


// Build home page
buildHome();

function clearDiv(){
    wrapper.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
    clearDiv();
    buildHome();
})

menuBtn.addEventListener('click', () => {
    clearDiv();
    buildMenu();
})

contactBtn.addEventListener('click', () => {
    clearDiv();
    buildContact();
})