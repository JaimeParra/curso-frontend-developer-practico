const menu_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenuMobile    = document.querySelector('.menu');
const mobileMenu        = document.querySelector('.mobile-menu');


menu_email.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu ()
{
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    mobileMenu.classList.toggle('inactive');
}