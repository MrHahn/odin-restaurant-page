import './styles.css';
import {buildHome} from './build.js';
import {buildMenu} from './menu.js';
import {buildContact} from './contact.js';

const heroWrapper = document.querySelector('.hero');
const wrapper = document.querySelector('#content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');
const buttons = document.querySelectorAll('button');

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


buttons.forEach((item) => {
    item.addEventListener('click', () => {
        buttons.forEach(item => item.classList.remove('active'));
        clearDiv();
        switch(item.classList[0]) {
            case 'home-btn':
                item.classList.add('active');
                buildHome();
                break;
            case 'menu-btn':
                item.classList.add('active');
                buildMenu();
                break;
            case 'contact-btn':
                item.classList.add('active');
                buildContact();
                break;
        }
    });
})


// homeBtn.addEventListener('click', () => {
//     clearDiv();

//     buildHome();
// })

// menuBtn.addEventListener('click', () => {
//     clearDiv();
//     buildMenu();
// })

// contactBtn.addEventListener('click', () => {
//     clearDiv();
//     buildContact();
// })