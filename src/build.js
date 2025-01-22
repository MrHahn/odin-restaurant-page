const wrapper = document.querySelector('#content');

export const buildHero = () => {
    const hero = document.createElement('div');
    hero.classList.add('page-hero');
    hero.innerHTML = `<h1>Odin's Seafood</h1>`;
    wrapper.appendChild(hero);
}

export const buildAbout = () => {
    const about = document.createElement('div');
    about.classList.add('about');
    about.innerHTML = `<h3>We has the best Seafood in all of the places that don't have water.</h3>`;
    wrapper.appendChild(about);
}