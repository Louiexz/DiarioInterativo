import { LinksFuncts } from './components/links.js';

const links = new LinksFuncts();
links.allLinks();

if (window.location.href.includes('index')) {
    links.addClick("#create-page", "PageNew/nova-pagina")
}

if (window.innerWidth <= 600) {
    document.querySelector('header').classList.add('mobile-header');
} else {
    document.querySelector('header').classList.add('header');
}
window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
        document.querySelector('header').classList.add('mobile-header');
        document.querySelector('header').classList.remove('header'); // Remove .header class if previously added
    } else {
        document.querySelector('header').classList.remove('mobile-header'); // Remove .mobile-header class if previously added
        document.querySelector('header').classList.add('header');
    }
})