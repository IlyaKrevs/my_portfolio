const button_more = document.querySelectorAll('.cell__item_button_more');
const my_popup = document.querySelector('.pop_up__main');


const myExit = document.querySelector('.pop_up__pic360');
const myHeader = document.querySelector('.header');

const menu_icon = document.querySelector('.hamburger_menu_icon');
const menu_icon_hidden = document.querySelector('.hamburger_menu_close');

const myOpenMenu = document.querySelector('.hamburger_menu_open');

menu_icon_hidden.addEventListener('click', (e) => {
    menu_icon.style.display = 'flex';
    menu_icon_hidden.style.display = 'none';
    my_popup.style.display = 'none';
    myHeader.style.position = 'relative';
    myOpenMenu.style.display = 'none';
});

menu_icon.addEventListener('click', (e) => {
    menu_icon.style.display = 'none';
    menu_icon_hidden.style.display = 'flex';
    myOpenMenu.style.display = 'flex';
    myHeader.style.position = 'fixed';
});

button_more.forEach(element => {
    element.addEventListener('click', (e) => {
        my_popup.style.display = 'flex';
        menu_icon.style.display = 'none';
        menu_icon_hidden.style.display = 'flex';
        myHeader.style.position = 'fixed';
    })
});




myExit.addEventListener('click', (e) => {
    my_popup.style.display = 'none';
    myHeader.style.display = 'flex';
    myHeader.style.position = 'relative';
});