//Раскрытие меню при нажатии
const headerMenu = document.querySelector('.header-menu');

if(headerMenu !== null) {

    const headerMenuButton = headerMenu.querySelector('.header-menu__burger-elem');

    headerMenuButton.addEventListener('click', (event) => {
        headerMenu.classList.toggle('header-menu_active');
    })
    
}


//Изменение стилей шапки при скролле
const header = document.querySelector('.header');

if(header !== null) {

    document.addEventListener('scroll', (event) => {

        let currentScroll = document.documentElement.scrollTop;

        if(currentScroll > 10) {
            header.classList.add('header_scroll');
        }
        else {
            header.classList.remove('header_scroll');
        }
    })
}