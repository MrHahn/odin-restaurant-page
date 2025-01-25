const wrapper = document.querySelector('#content');

export const buildHome = () => {
    const about = document.createElement('div');
    about.classList.add('about');
    about.innerHTML = `<h3>We has the best Seafood in all of the places that don't have water.</h3>`;
    wrapper.appendChild(about);
}