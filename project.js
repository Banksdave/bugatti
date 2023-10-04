const navItems = document.querySelector ('#nav__items');
const openNavBtn = document.querySelector('open-menu-btn');
const closeNavBtn = document.querySelector('#close-menu-btn');


openNavBtn.addEventListener ('click', () => {
    navItems.style.witdth = '50rem';
    openNavBtn.style.display = 'none';
    navItems.style.display = 'block';
    closeNaveBtn.style.display = 'inline-block';
})



closeNavBtn.addEventListener('click', () => {
    navItems.style.witdth = '0';
    closeNavBtn.style.display = 'none';
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
})