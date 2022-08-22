const menu_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menu_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu ()
{
    desktopMenu.classList.toggle('inactive');
}