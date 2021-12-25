const menu = document.querySelector('#mobile-menu')
const links = document.querySelector('.navbar__menu')
const logo = document.querySelector('#navbar__logo')

const Menu = () => {
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
}

menu.addEventListener('click', Menu);

const highlightMenu = () => {
    const element = document.querySelector('.hightlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const services = document.querySelector('#services-page');
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 600) {
        home.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        about.classList.add('highlight');
        home.classList.remove('highlight');
        services.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2345) {
        services.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }

    if((element&&window.innerWidth < 960 && scrollPos < 600) || element) {
        element.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        links.classList.remove('active');
    }
};

links.addEventListener('click', hideMenu)
logo.addEventListener('click', hideMenu)