function mostrarMenu() {
    let menuMobile = document.querySelector('.menu_mobile');
    if(menuMobile.classList.contains('mostrar_menu')) {
        menuMobile.classList.remove('mostrar_menu')
    }
    else {
        menuMobile.classList.add('mostrar_menu');
    }
}